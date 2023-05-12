import React from 'react';
import { GAME_AOS_PATH, GAME_FPS_PATH, GAME_MMORPG_PATH, GAME_PATH, GAME_POPULAR_PATH } from '../../routes/routePaths';
import { Header } from '../common';

const GameHeader = () => (
  <Header
    title={{
      path: GAME_PATH,
      content: '게임',
    }}
    menuList={[
      { path: GAME_FPS_PATH, content: 'FPS' },
      { path: GAME_MMORPG_PATH, content: 'MMORPG' },
      { path: GAME_AOS_PATH, content: 'AOS' },
      { path: GAME_POPULAR_PATH, content: '인기글' },
    ]}
  />
);

export default GameHeader;
