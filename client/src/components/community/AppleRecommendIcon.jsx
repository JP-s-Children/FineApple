import React from 'react';
import styled from '@emotion/styled';
import { AiFillApple } from 'react-icons/ai';
import { Flex, Text } from '@mantine/core';

const AppleLogoIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${({ color }) => color};
`;

const AppleRecommendIcon = ({ color = 'var(--font-color)' }) => (
  <Flex gap="5px" align="center">
    <AppleLogoIcon color={color}>
      <AiFillApple />
    </AppleLogoIcon>
    <Text c={color} pt="3px" fz="15px" fw="500">
      FineApple 권장 답변
    </Text>
  </Flex>
);

export default AppleRecommendIcon;
