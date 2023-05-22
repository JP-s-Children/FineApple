import styled from '@emotion/styled';
import { Flex, Text } from '@mantine/core';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const HeartIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const LikeIcon = ({ likeCount }) => (
  <Flex gap="5px" align="flex-end">
    <HeartIcon>
      <AiOutlineHeart />
    </HeartIcon>
    <Text pt="2px" fz="15px" fw="500" c="var(--font-color)">
      {likeCount}
    </Text>
  </Flex>
);

export default LikeIcon;
