import React from 'react';
import { Outlet } from 'react-router-dom';
import ComputerItHeader from '../components/community/ComputerItHeader';

const ComputerIt = () => (
  <>
    <ComputerItHeader />
    <Outlet />
  </>
);

export default ComputerIt;
