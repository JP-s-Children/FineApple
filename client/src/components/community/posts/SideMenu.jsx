import React from 'react';
import styled from '@emotion/styled';
import { Text, Box, NavLink, Stack } from '@mantine/core';
import FILTERS from '../../../constants/filters';
import SORTS from '../../../constants/sorts';

const Container = styled(Box)`
  width: 280px;
  margin-right: 40px;
  padding-right: 40px;
  border-right: 1px solid var(--opacity-border-color);

  button {
    height: 40px;
    color: var(--font-color);
    border-radius: 10px;
    &:hover {
      background-color: var(--opacity-bg-color);
    }
  }
`;

const filterList = [
  {
    title: '전체보기',
    filter: FILTERS.all,
  },
  {
    title: '해결된 질문',
    filter: FILTERS.completed,
  },
  {
    title: '해결되지 않은 질문',
    filter: FILTERS.active,
  },
];

const sortList = [
  {
    title: '최신순',
    sort: SORTS.recent,
  },
  {
    title: '오래된 순',
    sort: SORTS.old,
  },
  {
    title: '인기순',
    sort: SORTS.like,
  },
];
const SideMenu = ({ currentSort, currentFilter, setCurrentSort, setCurrentFilter }) => (
  <Container>
    <Stack my="xl" spacing="xl">
      <Text fz="20px" fw="600">
        필터
      </Text>
      {filterList.map(({ title, filter }) => (
        <NavLink
          key={filter}
          label={title}
          active={currentFilter === filter}
          onClick={() => setCurrentFilter(filter)}
        />
      ))}

      <Text mt="16px" fz="20px" fw="600">
        정렬
      </Text>
      {sortList.map(({ title, sort }) => (
        <NavLink key={sort} label={title} active={currentSort === sort} onClick={() => setCurrentSort(sort)} />
      ))}
    </Stack>
  </Container>
);

export default SideMenu;
