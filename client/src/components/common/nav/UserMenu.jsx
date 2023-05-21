import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { AvatarIcon } from '..';
import { MY_FAV_POSTS_PATH, MY_POSTS_PATH, MY_PROFILE_PATH, SIGNIN_PATH } from '../../../constants/routes';
import { authSignOut } from '../../../services/auth';
import ProfileSubMenu from './ProfileSubMenu';

const AvatarWrapper = styled.div`
  background: none;
  :hover {
    color: var(--hover-font-color);
  }
`;

const LoginLink = styled(Link)`
  color: var(--font-color);
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: none !important;
  border: 3px solid var(--opacity-border-color);
  border-radius: 100%;
  font-size: 0.8rem;
  font-weight: 600;
  :hover {
    color: var(--hover-font-color);
  }
`;

const UserMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = Recoil.useRecoilState(userState);

  const handleLogout = async () => {
    try {
      await authSignOut();
      setUser(null);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(SIGNIN_PATH);
    }
  };

  return !user ? (
    <LoginLink to={SIGNIN_PATH}>로그인</LoginLink>
  ) : (
    <Menu trigger="hover">
      <Menu.Target>
        <AvatarWrapper>
          <AvatarIcon avatarId={user.avatarId} activeHoverStyle={true} />
        </AvatarWrapper>
      </Menu.Target>
      <ProfileSubMenu
        menuItems={[
          { size: 'lg', content: '프로필', path: MY_PROFILE_PATH },
          { size: 'lg', content: '나의 질문', path: MY_POSTS_PATH },
          { size: 'lg', content: '좋아요', path: MY_FAV_POSTS_PATH },
        ]}
        handleLogout={handleLogout}
      />
    </Menu>
  );
};

export default UserMenu;
