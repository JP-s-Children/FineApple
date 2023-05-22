import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container, Flex, List, Text, Title } from '@mantine/core';
import { AutoComplete, CategorySelect, Tutorials } from '../components';
import { CATEGORY_INFO } from '../constants/category';
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

const CategoryListContainer = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  margin-top: 8rem;
  width: 940px;
  padding: 2rem;
  border: 1px solid var(--opacity-border-color);
  border-radius: 20px;
`;

const CategoryList = styled(List)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 1rem;
`;

const Category = styled(List.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--opacity-border-color);
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
            <Text fz="7rem" variant="gradient" gradient={{ from: '#5b3bff', to: '#00b7d7', deg: 75 }}>
              FineApple
            </Text>
          </Flex>
        </Title>
      </Description>

      <Text w="940px" fz="24px" fw={500}>
        FineApple이 지원하는 커뮤니티를 사용해 보세요!
      </Text>

      <Flex w="940px" justify="center" align="center" gap="10px" mt="1.5rem">
        <CategorySelect currentValue={currentValue} setCurrentValue={setCurrentValue} />
        <AutoComplete
          width={680}
          queryFn={getSearchedPosts}
          category={isValueMainCategory ? currentValue : ''}
          subCategory={isValueMainCategory ? '' : currentValue}
        />
      </Flex>

      <CategoryListContainer>
        <Text mb="2rem" fz="21px" fw="600">
          카테고리를 선택하면 관련 질문들이 표시됩니다
        </Text>

        <CategoryList>
          {Object.values(CATEGORY_INFO).map(({ name, path, category }) => (
            <Category key={name} path={path}>
              <Link to={`posts/${category}/${path}`}>
                <CategoryDescription>{name}</CategoryDescription>
              </Link>
            </Category>
          ))}
        </CategoryList>
      </CategoryListContainer>

      <Tutorials />
    </Wrapper>
  );
};

export default Home;
