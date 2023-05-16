import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { CategoryHeader } from '../components';

const CategoryLayout = () => {
  const { category } = useParams();

  return (
    <>
      <CategoryHeader category={category} />
      <Outlet />
    </>
  );
};

export default CategoryLayout;
