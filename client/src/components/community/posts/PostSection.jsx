import React from 'react';
import styled from '@emotion/styled';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Chip, Flex, Group, List, Text, Burger, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FILTERS from '../../../constants/filters';
import { EmptyPostIndicator, PostItem, ShowMoreButton, SideFilter } from '..';
import filterPosts from '../../../utils/filterPosts';
import sortPosts from '../../../utils/sortPosts';
import { getPosts } from '../../../../firebase/posts';

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
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(queryFn);
  const { data: posts } = useQuery({
    queryKey: ['postsFire'],
    queryFn: getPosts,
  });

  const [currentSort, setCurrentSort] = React.useState('recent');
  const [currentFilter, setCurrentFilter] = React.useState(FILTERS.all);
  const [opened, { toggle }] = useDisclosure(false);

  // const filteredPosts = filterPosts(data.posts, currentFilter);

  return (
    <>
      <Flex gap="10px" mt="3.5rem" mb="10px" align="center" fw="600">
        <Text fz="2rem" fw="600" mt="1px">
          질문
        </Text>
        <Text c="blue" fz="2.5rem">
          {data?.totalLength}
        </Text>
      </Flex>
      <Divider mb="1rem" variant="dashed" />
      <Flex justify="end" pos="relative">
        <Burger
          opened={opened}
          onClick={toggle}
          pos="absolute"
          top="2rem"
          left="0"
          color="var(--font-color)"
          aria-label={opened ? 'Close' : 'Open'}
        />
        <Chip.Group value={currentSort} onChange={setCurrentSort}>
          <Group position="center" mt="2rem">
            <Chip value="recent">최신 순</Chip>
            <Chip value="old">오래된 순</Chip>
          </Group>
        </Chip.Group>
      </Flex>
      <PostsContainer>
        <SideFilter open={opened} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
        {posts?.length !== 0 ? (
          <MyPosts>
            {posts?.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </MyPosts>
        ) : (
          <EmptyPostIndicator isShownButton={isShownQuestionButton} />
        )}
      </PostsContainer>
      {posts?.length > 0 && hasNextPage && <ShowMoreButton onClick={fetchNextPage} loading={isFetchingNextPage} />}
    </>
  );
};

export default PostSection;
