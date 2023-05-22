import React from 'react';
import {
  COMPUTER_IT_COMPUTER_PATH,
  COMPUTER_IT_MOBILE_PATH,
  COMPUTER_IT_PATH,
  COMPUTER_IT_POPULAR_PATH,
  COMPUTER_IT_PROGRAMMING_PATH,
  GAME_AOS_PATH,
  GAME_FPS_PATH,
  GAME_MMORPG_PATH,
  GAME_PATH,
  GAME_POPULAR_PATH,
} from '../../constants/routes';
import { Header } from '../common';

const headerInfos = {
  game: {
    title: {
      path: GAME_PATH,
      content: '게임',
    },
    menuList: [
      { path: GAME_FPS_PATH, content: 'FPS' },
      { path: GAME_MMORPG_PATH, content: 'MMORPG' },
      { path: GAME_AOS_PATH, content: 'AOS' },
      { path: GAME_POPULAR_PATH, content: '인기글' },
    ],
  },
  'computer-it': {
    title: {
      path: COMPUTER_IT_PATH,
      content: '컴퓨터/IT',
    },
    menuList: [
      { path: COMPUTER_IT_PROGRAMMING_PATH, content: '프로그래밍' },
      { path: COMPUTER_IT_COMPUTER_PATH, content: '컴퓨터' },
      { path: COMPUTER_IT_MOBILE_PATH, content: '모바일' },
      { path: COMPUTER_IT_POPULAR_PATH, content: '인기글' },
    ],
  },
};

const CategoryHeader = ({ category }) => (
  <Header title={headerInfos[category].title} menuList={headerInfos[category].menuList} />
);

export default CategoryHeader;
