import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Flex, List, Text, Divider, Loader } from '@mantine/core';
import FILTERS from '../../../constants/filters';
import { EmptyPostIndicator, PostItem, SideMenu } from '..';
import useInfinityScroll from '../../../hooks/useInfinityScroll';
import sortPosts from '../../../utils/sortPosts';
import filterPosts from '../../../utils/filterPosts';

const PostsContainer = styled(Flex)`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
`;

const MyPosts = styled(List)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const PostSection = ({ queryFn, isShownQuestionButton = true }) => {
  const { data: posts, fetchNextPage, hasNextPage } = useInfiniteQuery(queryFn);

  const [currentSort, setCurrentSort] = React.useState('recent');
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);
  const ref = useInfinityScroll(fetchNextPage);

  const displayPosts = sortPosts(filterPosts(posts, currentFilter), currentSort);

  return (
    <>
      <Flex gap="10px" mt="3.5rem" mb="10px" align="center" fw="600">
        <Text fz="2rem" fw="600" mt="1px">
          질문
        </Text>
        <Text c="blue" fz="2.5rem">
          {posts?.totalLength}
        </Text>
      </Flex>
      <Divider mb="1rem" />

      <PostsContainer>
        <SideMenu
          currentFilter={currentFilter}
          currentSort={currentSort}
          setCurrentFilter={setCurrentFilter}
          setCurrentSort={setCurrentSort}
        />
        {posts?.length !== 0 ? (
          <MyPosts>
            {displayPosts?.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </MyPosts>
        ) : (
          <EmptyPostIndicator isShownButton={isShownQuestionButton} />
        )}
      </PostsContainer>

      <Flex ref={ref} justify="center" mt="40px">
        {hasNextPage && <Loader />}
      </Flex>
    </>
  );
};

export default PostSection;
