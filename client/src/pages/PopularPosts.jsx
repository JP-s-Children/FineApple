import React from 'react';

const PopularPosts = ({ category }) => {
  console.log(category);
  return <div>{`${category} 인기글 목록`}</div>;
};

export default PopularPosts;
