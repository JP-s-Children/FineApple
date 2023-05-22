import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { myPostsQuery, profileByNickNameQuery } from '../../queries';
import { PostSection } from '../community';
import AvatarProfileInfoDetail from './AvatarProfileInfoDetail';

const ProfileInfo = ({ nickName }) => {
  const { data: userData } = useQuery(profileByNickNameQuery(nickName));

  return (
    <>
      <AvatarProfileInfoDetail nickName={nickName} {...userData} />
      <PostSection queryFn={myPostsQuery(userData.email)} />
    </>
  );
};

export default ProfileInfo;
