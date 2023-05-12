import React from 'react';
import {
  COMPUTER_IT_COMPUTER_PATH,
  COMPUTER_IT_MOBILE_PATH,
  COMPUTER_IT_PATH,
  COMPUTER_IT_POPULAR_PATH,
  COMPUTER_IT_PROGRAMMING_PATH,
} from '../../routes/routePaths';
import { Header } from '../common';

const ComputerItHeader = () => (
  <Header
    title={{
      path: COMPUTER_IT_PATH,
      content: '컴퓨터/IT',
    }}
    menuList={[
      { path: COMPUTER_IT_PROGRAMMING_PATH, content: '프로그래밍' },
      { path: COMPUTER_IT_COMPUTER_PATH, content: '컴퓨터' },
      { path: COMPUTER_IT_MOBILE_PATH, content: '모바일' },
      { path: COMPUTER_IT_POPULAR_PATH, content: '인기글' },
    ]}
  />
);

export default ComputerItHeader;
