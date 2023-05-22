import React from 'react';
import { MY_FAV_POSTS_PATH, MY_POSTS_PATH, MY_PROFILE_PATH } from '../../constants/routes';
import { Header } from '../common';

const profileHeaderMenuList = [
  { path: MY_POSTS_PATH, content: '나의질문' },
  { path: MY_FAV_POSTS_PATH, content: '좋아요' },
];

const ProfileHeader = () => (
  <Header
    title={{
      path: MY_PROFILE_PATH,
      content: '프로필',
    }}
    menuList={profileHeaderMenuList}
  />
);

export default ProfileHeader;
