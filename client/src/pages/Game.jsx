import React from 'react';
import { Outlet } from 'react-router-dom';
import { GameHeader } from '../components';

const Game = () => (
  <>
    <GameHeader />
    <Outlet />
  </>
);

export default Game;
