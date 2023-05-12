import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Profile, MyProductList } from '.';
import { myProfileQuery } from '../../queries';

const MyProfile = () => {
  const { data: userInfo } = useQuery(myProfileQuery());

  return (
    <>
      <MyProductList products={userInfo.products} />
      <Profile {...userInfo} />
    </>
  );
};

export default MyProfile;
