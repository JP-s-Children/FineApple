import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu, Text } from '@mantine/core';
import { ComputerItSubMenu } from '.';
import { GUIDE_FAQ_PATH, QUESTION_PATH, RANK_PATH } from '../../../constants/routes';
import GameSubMenu from './GameSubMenu';
import { CATEGORY } from '../../../constants/category';
import transientOptions from '../../../constants/transientOptions';

const NavItem = styled(Text, transientOptions)`
  padding: 8px 15px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: ${({ $isActive }) => $isActive && '2px solid var(--hover-font-color)'};
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

const MenuList = () => {
  const { category } = useParams();

  return (
    <>
      <Menu trigger="hover" c="var(--font-color)">
        <Menu.Target>
          <NavItem $isActive={category === 'computer-it'}>{CATEGORY['computer-it']}</NavItem>
        </Menu.Target>
        <ComputerItSubMenu />
      </Menu>

      <Menu trigger="hover" c="var(--font-color)">
        <Menu.Target>
          <NavItem $isActive={category === 'game'}>{CATEGORY.game}</NavItem>
        </Menu.Target>
        <GameSubMenu />
      </Menu>

      <LinkMenu to={QUESTION_PATH}>질문하기</LinkMenu>
      <LinkMenu to={GUIDE_FAQ_PATH}>이용가이드</LinkMenu>
      <LinkMenu to={RANK_PATH}>랭킹</LinkMenu>
    </>
  );
};

export default MenuList;
