import React from 'react';
import styled from '@emotion/styled';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Flex, Text } from '@mantine/core';

const CheckCircleIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${({ completed }) => (completed ? '#58be7d' : '#c2c2c2')};
`;

const CompletedIcon = ({ completed }) => (
  <Flex gap="5px" align="center">
    <CheckCircleIcon completed={completed}>
      <AiFillCheckCircle />
    </CheckCircleIcon>
    <Text pt="2px" fz="15px" fw="500" c="var(--font-color)">
      {completed ? '해결된 ' : '해결되지 않은 '}질문
    </Text>
  </Flex>
);

export default CompletedIcon;
