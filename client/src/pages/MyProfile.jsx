import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import userState from '../recoil/atoms/userState';
import { Loader, MyProfile } from '../components';

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

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

const Profile = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  return (
    <Container>
      <Title>{loginUser.nickName}님, 안녕하세요.</Title>
      <Wrapper>
        <React.Suspense fallback={<Loader />}>
          <MyProfile />
        </React.Suspense>
      </Wrapper>
    </Container>
  );
};

export default Profile;
