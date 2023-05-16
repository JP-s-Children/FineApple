import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Flex, Title } from '@mantine/core';
import { AutoComplete, PostSection } from '../components';
import { postsByCategoryQuery } from '../queries';
import { getSearchedPosts } from '../services/posts';
import { CATEGORY } from '../constants/category';
import { QUESTION_PATH } from '../constants/routes';

const Wrapper = styled(Container)`
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const PostsDescription = styled(Title)`
  position: relative;
  margin: 1rem 2rem 1rem 0;
  width: 240px;
  font-size: 3.2rem;
  word-break: keep-all;
`;

const CategoryPosts = () => {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Flex gap="0.5rem" mt="2rem">
        <Flex w="100%" justify="space-between" mb="2rem" align="center">
          <PostsDescription> {subCategory ? CATEGORY[subCategory] : CATEGORY[category]}</PostsDescription>
          <AutoComplete width={820} queryFn={getSearchedPosts} category={category} subCategory={subCategory} />
          <Button ml="2rem" size="lg" radius="10px" onClick={() => navigate(QUESTION_PATH)}>
            질문하기
          </Button>
        </Flex>
      </Flex>
      <PostSection queryFn={postsByCategoryQuery({ category, subCategory })} />
    </Wrapper>
  );
};

export default CategoryPosts;
