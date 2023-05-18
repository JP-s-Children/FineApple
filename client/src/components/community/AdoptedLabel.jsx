import React from 'react';
import { Flex, Text } from '@mantine/core';

const AdoptedLabel = ({ color = 'var(--font-color)' }) => (
  <Flex gap="5px" align="center">
    <Text c={color} pt="3px" fz="15px" fw="500">
      채택 답변
    </Text>
  </Flex>
);

export default AdoptedLabel;
