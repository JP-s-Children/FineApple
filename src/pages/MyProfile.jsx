import React from 'react';
import styled from '@emotion/styled';
import { Loader, MyProfile } from '../components';

const Container = styled.div`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const Wrapper = styled.div`
  max-width: 1024px;
  width: 1024px;
`;

const Profile = () => (
  <Container>
    <Wrapper>
      <React.Suspense fallback={<Loader />}>
        <MyProfile />
      </React.Suspense>
    </Wrapper>
  </Container>
);

export default Profile;
