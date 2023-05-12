import React from 'react';
import styled from '@emotion/styled';
import { Header, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MAIN_PATH } from '../../../routes/routePaths';
import { MenuList, ThemeButton, UserMenu, Logo } from '..';

const NavContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0;
  background-color: var(--footer-bg-color);
  color: var(--font-color);
`;

const Wrapper = styled(Group)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;
  gap: 20px;
`;

const LogoLink = styled(Link)`
  margin-right: 30px;
`;

const Nav = () => (
  <>
    <NavContainer>
      <Wrapper>
        <LogoLink to={MAIN_PATH}>
          <Logo clickable={true} />
        </LogoLink>
        <MenuList />
      </Wrapper>
      <Wrapper mr="50px">
        <ThemeButton />
        <UserMenu />
      </Wrapper>
    </NavContainer>
  </>
);

export default Nav;
