import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Flex, Title, Image } from '@mantine/core';
import { CATEGORY } from '../../constants/category';
import { AutoComplete, PostSection } from '.';
import { postsByCategoryQuery } from '../../queries';
import { getSearchedPosts } from '../../../firebase/posts';

const CategoryImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  figure.mantine-Image-figure {
    width: ${({ category }) => (category === CATEGORY.mac ? '90%' : category === CATEGORY.ipad ? '65%' : '70%')};
  }
`;

const CommunityCategorySection = ({ category }) => {
  const { subCategory } = useParams();

  return (
    <>
      <Flex gap="0.5rem" mt="4rem">
        {/* <CategoryImage
          src={`/community/${subCategory}/${subCategory}-category.png`}
          alt={`${subCategory}-category-img`}
          category={subCategory}
        /> */}
        <Flex direction="column" justify="center">
          {/* <Title mb="3rem">{CATEGORY[subCategory]}</Title> */}
          <AutoComplete width={720} queryFn={getSearchedPosts} category={category} subCategory={subCategory} />
        </Flex>
      </Flex>
      <PostSection queryFn={postsByCategoryQuery(subCategory)} />
    </>
  );
};

export default CommunityCategorySection;
