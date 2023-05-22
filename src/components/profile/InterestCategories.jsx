import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Flex, Text } from '@mantine/core';
import { CATEGORY_INFO } from '../../constants/category';

const InterestCategories = ({ interestCategories }) => (
  <Flex gap="sm">
    {interestCategories.length === 0 && (
      <Text fz="1rem" fw="400">
        {'등록된 관심 카테고리가 없습니다.'}
      </Text>
    )}

    {interestCategories.map((categoryType, index) => (
      <Link key={index} to={`/posts/${CATEGORY_INFO[categoryType].category}/${CATEGORY_INFO[categoryType].path}`}>
        <Badge size="lg" variant={CATEGORY_INFO[categoryType].style} color={CATEGORY_INFO[categoryType].color}>
          {CATEGORY_INFO[categoryType].name}
        </Badge>
      </Link>
    ))}
  </Flex>
);

export default InterestCategories;
