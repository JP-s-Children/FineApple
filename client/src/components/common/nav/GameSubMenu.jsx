import React from 'react';
import {
  GAME_AOS_PATH,
  GAME_FPS_PATH,
  GAME_MMORPG_PATH,
  GAME_PATH,
  GAME_POPULAR_PATH,
} from '../../../routes/routePaths';
import SubMenu from './SubMenu';

const GameSubMenu = () => {
  const menuItems = [
    { size: 'lg', content: '게임', path: GAME_PATH },
    { size: 'lg', content: 'FPS', path: GAME_FPS_PATH },
    { size: 'lg', content: 'MMORPG', path: GAME_MMORPG_PATH },
    { size: 'lg', content: 'AOS', path: GAME_AOS_PATH },
    { size: 'sm', content: '인기글', path: GAME_POPULAR_PATH },
  ];

  return <SubMenu label="게임 카테고리" menuItems={menuItems} />;
};

export default GameSubMenu;
