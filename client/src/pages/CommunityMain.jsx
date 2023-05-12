import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container, Image, List, Text, Title } from '@mantine/core';
import { AutoComplete, Tutorials } from '../components';
import categoryList from '../constants/categoryList';
import { COMPUTER_IT_PATH } from '../routes/routePaths';
import { getSearchedPosts } from '../../firebase/posts';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const Description = styled.section`
  width: 730px;
  word-break: keep-all;
`;

const CategoryList = styled(List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Category = styled(List.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    padding: 30px 45px;
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
  font-size: 18px;
  color: var(--font-color);
  text-decoration: none;
`;

const CommunityMain = ({ category }) => (
  <Wrapper>
    <Description>
      <Title size="52px" mt="24px" mb="40px">
        FineApple이 지원하는 커뮤니티
      </Title>
      <Text fz="26px" mb="40px">
        전 세계 FineApple 고객들과 소통해 보세요 🚀
      </Text>
      <AutoComplete width={720} queryFn={getSearchedPosts} category={category} />
    </Description>

    <Image src="/community/community-main.png" alt="community" pt="6rem" pb="3rem" />

    <Text mt="4rem" mb="2rem" fz="21px" fw="600">
      제품을 선택하시면 관련 주제가 표시됩니다 ⭐️
    </Text>
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

    <Tutorials />
  </Wrapper>
);

export default CommunityMain;
