import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container, Flex, Image, List, Text, Title } from '@mantine/core';
import { COMPUTER_IT_PATH } from '../routes/routePaths';
import categoryList from '../constants/categoryList';

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

const CategoryList = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 3rem;
`;

const Category = styled(List.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    padding: 3.5rem 5rem;
  }

  &:hover {
    font-weight: 500;
    color: var(--hover-font-color);
    border: 1px solid var(--hover-font-color);
    background-color: var(--opacity-bg-color);
  }
`;

const CategoryDescription = styled.p`
  margin-top: 30px;
  font-size: 21px;
  color: var(--font-color);
  text-align: center;
  text-decoration: none;
`;

const Home = () => (
  <Wrapper>
    <Title fw={700} my="3rem" ta="center">
      <Flex gap="1rem" justify="center" align="center" mb="1rem">
        <Text mt="1rem" fz="6rem">
          Welcome.
        </Text>
        <Text fz="7rem" variant="gradient" gradient={{ from: 'blue', to: '#FF7E37', deg: 120 }}>
          FineApple
        </Text>
      </Flex>
      <Text fz="1.5rem" c="gray">
        커뮤니티에서 제품과 관련된 질문을 검색하고,
        <br />
        검색 결과에 원하는 질문이 없다면, 질문을 작성해 보세요.
      </Text>
    </Title>

    <Image src="/home.jpeg" alt="home-image" radius={20} />
    <Title fz="1.75rem" mt="7rem">
      🍍 FineApple의 커뮤니티 기능을 활용해 보세요.
    </Title>

    <CategoryList>
      {categoryList.map(({ imgPath, category }) => (
        <Category key={imgPath}>
          <Link to={`${COMPUTER_IT_PATH}/${category.toLowerCase()}`}>
            <Image src={imgPath} alt={`category-${category}`} />
            <CategoryDescription>{category}</CategoryDescription>
          </Link>
        </Category>
      ))}
    </CategoryList>
  </Wrapper>
);

export default Home;
