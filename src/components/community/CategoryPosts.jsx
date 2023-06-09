import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Flex, Title } from '@mantine/core';
import { AutoComplete, PostSection } from '..';
import { postsByCategoryQuery } from '../../queries';
import { getSearchedPosts } from '../../services/posts';
import { CATEGORY } from '../../constants/category';
import { MAIN_PATH, QUESTION_PATH } from '../../constants/routes';

const Wrapper = styled(Container)`
  min-width: 1024px;
  width: 1024px;
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
  margin: 1rem 1rem 1.5rem 0;
  width: 240px;
  font-size: 3.5rem;
  word-break: keep-all;
`;

const CategoryPosts = () => {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isRouteHome = pathname === MAIN_PATH;

  return (
    <Wrapper>
      <Flex direction="column" mt="1rem" mb="2rem" miw="1024px" w="100%" h="165px">
        <PostsDescription> {subCategory ? CATEGORY[subCategory] : CATEGORY[category]}</PostsDescription>
        <Flex justify="space-between">
          <AutoComplete
            width={850}
            queryFn={getSearchedPosts}
            category={category}
            subCategory={subCategory}
            isRouteHome={isRouteHome}
          />
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
