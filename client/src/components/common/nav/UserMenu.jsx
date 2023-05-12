import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { AvatarIcon, SubMenu } from '..';
import { signOut } from '../../../api/auth';
import { PROFILE_PATH, FAV_CATEGORY_PATH, SIGNIN_PATH } from '../../../routes/routePaths';

const AvatarWrapper = styled.div`
  background: none;
  :hover {
    color: var(--hover-font-color);
  }
`;

const LoginLink = styled(Link)`
  color: var(--font-color);
  background: none !important;
  :hover {
    color: var(--hover-font-color);
  }
`;

const UserMenu = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = Recoil.useRecoilState(userState);

  const handleLogout = async () => {
    try {
      await signOut();
      setLoginUser(null);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(SIGNIN_PATH);
    }
  };

  return !loginUser ? (
    <LoginLink to={SIGNIN_PATH}>로그인</LoginLink>
  ) : (
    <Menu trigger="hover">
      <Menu.Target>
        <AvatarWrapper>
          <AvatarIcon avatarId={loginUser.avatarId} />
        </AvatarWrapper>
      </Menu.Target>
      <SubMenu
        menuItems={[
          { size: 'lg', content: '프로필', path: PROFILE_PATH },
          { size: 'lg', content: '관심 카테고리 설정', path: FAV_CATEGORY_PATH },
          { size: 'lg', content: '나의 질문 목록', path: FAV_CATEGORY_PATH },
          { size: 'sm', content: '로그아웃', onClick: handleLogout },
        ]}
      />
    </Menu>
  );
};

export default UserMenu;
