import React from 'react';
import styled from '@emotion/styled';
import { Text, Box, NavLink, Stack } from '@mantine/core';
import FILTERS from '../../../constants/filters';

const Container = styled(Box)`
  --spacing: ${({ open }) => (open ? 40 : 0)};
  --width: ${({ open }) => (open ? 280 : 0)};
  --x: ${({ open }) => (open ? 0 : 280)};

  width: calc(var(--width) * 1px);

  margin-right: calc(var(--spacing) * 1px);
  padding-right: calc(var(--spacing) * 1px);
  transform: translate3d(calc(var(--x) * -1px), 0, 0);
  transition: all 0.2s;
  border-right: 1px solid #e5e5e5;

  button {
    color: var(--font-color);
    border-radius: 10px;
    &:hover {
      background-color: var(--opacity-bg-color);
    }
  }
`;

const navLinkList = [
  {
    title: '전체보기',
    filter: FILTERS.all,
  },
  {
    title: '해결된 질문',
    filter: FILTERS.completed,
  },
  {
    title: 'FineApple 권장 답변',
    filter: FILTERS.certified,
  },
  {
    title: '해결되지 않은 질문',
    filter: FILTERS.active,
  },
];

const SideFilter = ({ open, currentFilter, setCurrentFilter }) => (
  <Container open={open}>
    <Text fz="20px" fw="600">
      유형
    </Text>
    <Stack my="xl" spacing="xl">
      {navLinkList.map(({ title, filter }) => (
        <NavLink
          key={filter}
          label={title}
          active={currentFilter === filter}
          onClick={() => setCurrentFilter(filter)}
        />
      ))}
    </Stack>
  </Container>
);

export default SideFilter;
