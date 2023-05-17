import { Badge, Flex, Text } from '@mantine/core';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeChip = ({ checked, likeCount }) => (
  <Badge size="xl" sx={{ cursor: 'pointer' }}>
    <Flex c={checked ? 'red' : 'gray'} align="center" gap="4px">
      {checked ? <AiFillHeart /> : <AiOutlineHeart />}
      <Text c="black"> {likeCount}</Text>
    </Flex>
  </Badge>
);

export default LikeChip;
