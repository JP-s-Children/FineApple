import React from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Flex, List, Text, Divider, Loader, Container } from '@mantine/core';
import FILTERS from '../../../constants/filters';
import { EmptyPostIndicator, PostItem, SideMenu } from '..';
import useInfinityScroll from '../../../hooks/useInfinityScroll';
import sortPosts from '../../../utils/sortPosts';
import filterPosts from '../../../utils/filterPosts';
import transientOptions from '../../../constants/transientOptions';

const Wrapper = styled(Container)`
  min-width: 1280px;
  width: 100%;
  padding: 0;
`;

const PostsContainer = styled(Flex, transientOptions)`
  margin: 1rem auto 0;
  width: ${({ $isPopularIncluded }) => ($isPopularIncluded ? '1280px' : '100%')};
  overflow: hidden;
`;

const MyPosts = styled(List, transientOptions)`
  display: flex;
  width: ${({ $isPopularIncluded }) => ($isPopularIncluded ? '1280px' : '100%')};
  flex-direction: column;
  gap: 1rem;
`;

const PostSection = ({ queryFn, isQuestionButtonShown = true }) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(queryFn);

  const [currentSort, setCurrentSort] = React.useState('recent');
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);
  const ref = useInfinityScroll(fetchNextPage);

  const { pathname } = useLocation();
  const isPathPopularIncluded = pathname.includes('popular');

  const displayPosts = isPathPopularIncluded
    ? data?.posts
    : sortPosts(filterPosts(data?.posts, currentFilter), currentSort);

  return (
    <Wrapper>
      {!isPathPopularIncluded && (
        <>
          <Flex align="center" gap="10px" mt="3.5rem" mb="10px" fw="600">
            <Text fz="2rem" fw="600" mt="1px">
              질문
            </Text>
            <Text c="blue" fz="2.5rem">
              {data?.totalLength}
            </Text>
          </Flex>
          <Divider mb="1rem" color="var(--opacity-border-color)" />
        </>
      )}

      <PostsContainer $isPopularIncluded={isPathPopularIncluded}>
        {!isPathPopularIncluded && (
          <SideMenu
            currentFilter={currentFilter}
            currentSort={currentSort}
            setCurrentFilter={setCurrentFilter}
            setCurrentSort={setCurrentSort}
          />
        )}
        {data?.posts?.length !== 0 ? (
          <MyPosts>
            {displayPosts?.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </MyPosts>
        ) : (
          <EmptyPostIndicator isButtonShown={isQuestionButtonShown} />
        )}
      </PostsContainer>

      <Flex ref={ref} justify="center" mt="40px">
        {hasNextPage && <Loader />}
      </Flex>
    </Wrapper>
  );
};

export default PostSection;
