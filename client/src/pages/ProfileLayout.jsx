import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProfileHeader } from '../components';

const ProfileLayout = () => (
  <>
    <ProfileHeader />
    <Outlet />
  </>
);

export default ProfileLayout;
