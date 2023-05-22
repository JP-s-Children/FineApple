import React from 'react';
import styled from '@emotion/styled';
import { Flex, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const SubMenuContainer = styled(Menu.Dropdown)`
  min-width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  padding-top: 30px;
  padding-bottom: 20px;
  border: none;
  border-radius: 0;
  background-color: var(--secondary-bg-color);
  color: var(--footer-font-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  z-index: 9999;
`;

const SubMenuWrapper = styled.div`
  min-width: 720px;
  max-width: 720px;
  display: flex;
  flex-direction: row;
`;

const SubMenuLabel = styled(Text)`
  color: var(--footer-font-color);
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 8px;
  padding-left: 5px;
`;

const SubMenuItem = styled(Link)`
  font-size: ${({ size }) => (size === 'sm' ? '15px' : size === 'md' ? '18px' : '22px')};
  font-weight: ${({ size }) => (size === 'sm' ? '400' : size === 'md' ? '600' : '700')};
  margin-top: ${({ size }) => size === 'sm' && '8px'};
  margin-bottom: ${({ size }) => size === 'lg' && '3px'};
  color: var(--font-color);
  width: fit-content;
  padding: 3px 5px;
  background: none !important;
  :hover {
    color: var(--hover-font-color);
  }
`;

/**
 * @param {{
 * label?: string
 * meunItems: Array<{
 *  size: 'sm' | 'md' | 'lg',
 *  content: string,
 *  path: string
 * }>
 *
 * }} props
 */
const SubMenu = ({ label, menuItems }) => (
  <SubMenuContainer>
    <SubMenuWrapper>
      <Flex direction="column">
        {label && <SubMenuLabel>{label}</SubMenuLabel>}
        {menuItems.map(({ size, content, path }) => (
          <SubMenuItem key={`${content}-${path}`} to={path} size={size}>
            {content}
          </SubMenuItem>
        ))}
      </Flex>
    </SubMenuWrapper>
  </SubMenuContainer>
);

export default SubMenu;
