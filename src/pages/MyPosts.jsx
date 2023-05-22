import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { PostSection } from '../components/community';
import { myPostsQuery } from '../queries';
import userState from '../recoil/atoms/userState';
import { Loader } from '../components';

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

const MyPosts = () => {
  const user = Recoil.useRecoilValue(userState);

  return (
    <Wrapper>
      <Title size="52px" mt="40px">
        👨‍🚀 내가 작성한 질문
      </Title>
      <React.Suspense fallback={<Loader />}>
        <PostSection queryFn={myPostsQuery(user.email)} />
      </React.Suspense>
    </Wrapper>
  );
};

export default MyPosts;
