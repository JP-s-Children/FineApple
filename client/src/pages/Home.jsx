import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container, Flex, List, Text, Title } from '@mantine/core';
import { AutoComplete, CategorySelect, Tutorials } from '../components';
import categoryList from '../constants/categoryList';
import { getSearchedPosts } from '../services/posts';

const Wrapper = styled(Container)`
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const Description = styled.section`
  word-break: keep-all;
`;

const CategoryList = styled(List)`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 1rem;
`;

const Category = styled(List.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  cursor: pointer;

  background-color: ${({ path }) => !path.length && '#e5e5e580'};

  & .mantine-List-itemWrapper {
    width: 100%;
  }

  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 100%;
    padding: 1rem 2rem;
  }

  &:hover {
    font-weight: 500;
    color: var(--hover-font-color);
    border: 1px solid var(--hover-font-color);
    background-color: var(--opacity-bg-color);
  }
`;

const CategoryDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  word-break: keep-all;
  color: var(--font-color);
  text-decoration: none;
`;

const Home = () => {
  const [currentValue, setCurrentValue] = React.useState('');
  const isValueMainCategory = currentValue === 'computer-it' || currentValue === 'game';

  return (
    <Wrapper>
      <Description>
        <Title mt="2rem" mb="3rem" ta="center">
          <Flex gap="1rem" justify="center" align="center">
            <Text mt="1rem" fz="6rem">
              Welcome.
            </Text>
            <Text fz="7rem" variant="gradient" gradient={{ from: 'blue', to: '#FF7E37', deg: 120 }}>
              FineApple
            </Text>
          </Flex>
        </Title>
      </Description>

      <Text w="940px" fz="24px" fw={500}>
        전 세계 FineApple 고객들과 소통해 보세요
      </Text>

      <Flex w="940px" justify="center" align="center" gap="10px" mt="2rem">
        <CategorySelect currentValue={currentValue} setCurrentValue={setCurrentValue} />
        <AutoComplete
          width={680}
          queryFn={getSearchedPosts}
          category={isValueMainCategory ? currentValue : ''}
          subCategory={isValueMainCategory ? '' : currentValue}
        />
      </Flex>

      <Text mt="8rem" mb="2rem" fz="21px" fw="600">
        🎛️ 카테고리를 선택하시면 관련 질문들이 표시됩니다
      </Text>

      <CategoryList>
        {categoryList.map(({ path, category, content }) => (
          <Category key={content} path={path}>
            <Link to={`${category}/${path}`}>
              <CategoryDescription>{content}</CategoryDescription>
            </Link>
          </Category>
        ))}
      </CategoryList>

      <Tutorials />
    </Wrapper>
  );
};

export default Home;
