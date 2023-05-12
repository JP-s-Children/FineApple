import React from 'react';
import {
  COMPUTER_IT_COMPUTER_PATH,
  COMPUTER_IT_MOBILE_PATH,
  COMPUTER_IT_PATH,
  COMPUTER_IT_POPULAR_PATH,
  COMPUTER_IT_PROGRAMMING_PATH,
} from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const ComputerItSubMenu = () => {
  const menuItems = [
    { size: 'lg', content: '컴퓨터/IT', path: COMPUTER_IT_PATH },
    { size: 'lg', content: '프로그래밍', path: COMPUTER_IT_PROGRAMMING_PATH },
    { size: 'lg', content: '컴퓨터', path: COMPUTER_IT_COMPUTER_PATH },
    { size: 'lg', content: '모바일', path: COMPUTER_IT_MOBILE_PATH },
    { size: 'sm', content: '인기글', path: COMPUTER_IT_POPULAR_PATH },
  ];

  return <SubMenu label="컴퓨터/IT 카테고리" menuItems={menuItems} />;
};

export default ComputerItSubMenu;
