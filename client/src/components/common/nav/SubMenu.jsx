import React from 'react';
import styled from '@emotion/styled';
import { Flex, Menu, Text } from '@mantine/core';

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

const SubMenuItem = styled(Menu.Item)`
  font-size: ${({ size }) => (size === 'sm' ? '15px' : '20px')};
  font-weight: ${({ size }) => (size === 'sm' ? '400' : '700')};
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
 *  size: 'sm' | 'lg',
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
        {menuItems.map(({ size, content, path, onClick }) =>
          path ? (
            <SubMenuItem key={path} size={size} component="a" href={path}>
              {content}
            </SubMenuItem>
          ) : (
            <SubMenuItem key={content} size={size} component="a" onClick={onClick}>
              {content}
            </SubMenuItem>
          )
        )}
      </Flex>
    </SubMenuWrapper>
  </SubMenuContainer>
);

export default SubMenu;
