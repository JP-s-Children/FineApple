import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu, Text } from '@mantine/core';
import { ComputerItSubMenu } from '.';
import { GUIDE_FAQ_PATH, QUESTION_PATH, RANK_PATH } from '../../../routes/routePaths';
import GameSubMenu from './GameSubMenu';

const NavItem = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 15px;
  :hover {
    color: var(--hover-font-color);
  }
  &[aria-expanded='true'] {
    cursor: default;
  }
`;

const LinkMenu = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 15px;
  color: var(--font-color);
  :hover {
    color: var(--hover-font-color);
  }
`;

const MenuList = () => (
  <>
    <Menu trigger="hover" c="var(--font-color)">
      <Menu.Target>
        <NavItem>컴퓨터/IT</NavItem>
      </Menu.Target>
      <ComputerItSubMenu />
    </Menu>

    <Menu trigger="hover" c="var(--font-color)">
      <Menu.Target>
        <NavItem>게임</NavItem>
      </Menu.Target>
      <GameSubMenu />
    </Menu>

    <LinkMenu to={QUESTION_PATH}>질문하기</LinkMenu>
    <LinkMenu to={GUIDE_FAQ_PATH}>이용가이드</LinkMenu>
    <LinkMenu to={RANK_PATH}>랭킹</LinkMenu>
  </>
);

export default MenuList;
