import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { PostSection } from '../components/community';
import { myPostsQuery } from '../queries';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const CommunityMyPosts = () => (
  <Wrapper>
    <Title size="52px" mt="40px">
      내가 작성한 질문
    </Title>
    <PostSection queryFn={myPostsQuery()} />
  </Wrapper>
);

export default CommunityMyPosts;
