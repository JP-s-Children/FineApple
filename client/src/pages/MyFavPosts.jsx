import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { Loader, PostSection } from '../components';
import { myLikePostsQuery } from '../queries';
import userState from '../recoil/atoms/userState';

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

const MyFavPosts = () => {
  const user = Recoil.useRecoilValue(userState);

  return (
    <Wrapper>
      <Title size="52px" mt="40px">
        🫰 좋아요
      </Title>
      <React.Suspense fallback={<Loader />}>
        <PostSection queryFn={myLikePostsQuery(user.email)} />
      </React.Suspense>
    </Wrapper>
  );
};

export default MyFavPosts;
