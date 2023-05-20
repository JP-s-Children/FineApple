import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Flex, Text, Title } from '@mantine/core';
import { QUESTION_PATH } from '../../constants/routes';
import { PostSection } from '.';
import { popularPostsByCategoryQuery } from '../../queries';

const Wrapper = styled(Container)`
  min-width: 1024px;
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

const PostLabel = styled(Text)`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  background-color: var(--third-bg-color);
`;

const PopularPosts = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <Wrapper>
      <Flex justify="space-between" align="center" mt="2rem" miw="1024px" w="100%" h="140px">
        <PostsDescription>인기글</PostsDescription>
        <Button ml="2rem" size="lg" radius="10px" onClick={() => navigate(QUESTION_PATH)}>
          질문하기
        </Button>
      </Flex>
      <Flex justify="end" p="0" miw="1024px">
        <PostLabel>💡 좋아요가 많은 순으로 10개의 질문을 보여줍니다.</PostLabel>
      </Flex>
      <PostSection queryFn={popularPostsByCategoryQuery({ category })} />
    </Wrapper>
  );
};

export default PopularPosts;
