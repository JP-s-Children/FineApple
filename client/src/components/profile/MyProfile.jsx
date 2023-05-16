import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Profile } from '.';
import { myProfileQuery } from '../../queries';
import userState from '../../recoil/atoms/userState';

const MyProfile = () => {
  const loginUser = Recoil.useRecoilValue(userState);

  const { data: userInfo } = useQuery(myProfileQuery(loginUser.email));

  return (
    <>
      {/* TODO: interestedCategory */}
      {/* <MyProductList products={userInfo.products} /> */}
      <Profile {...userInfo} />
    </>
  );
};

export default MyProfile;
