import React from 'react';
import styled from '@emotion/styled';
import { Container, Skeleton } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../components';

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

const Profile = () => {
  const { nickName } = useParams();

  return (
    <Wrapper>
      <React.Suspense
        fallback={
          <>
            <Skeleton width="100%" height={240} my="40px" />
            <Skeleton width="100%" height={600} my="40px" />
          </>
        }>
        <ProfileInfo nickName={nickName} />
      </React.Suspense>
    </Wrapper>
  );
};

export default Profile;
