import React from 'react';
import styled from '@emotion/styled';
import { RiHashtag } from 'react-icons/ri';
import { Select as MantineSelect } from '@mantine/core';
import { CATEGORY } from '../../../constants/category';

const Select = styled(MantineSelect)`
  & .mantine-Select-icon {
    width: 50px;
    font-size: 21px;
  }

  & .mantine-Select-input {
    padding-left: 3rem;
    height: 50px;
    font-size: 18px;
    color: var(--font-color);
    background-color: var(--secondary-bg-color);
  }

  & .mantine-Select-item {
    border: 1px solid transparent;
    border-radius: 10px;
    color: var(--font-color);
    background-color: var(--secondary-bg-color);
    cursor: pointer;

    &[data-hovered='true'],
    &:hover {
      div {
        font-weight: 600;
      }
      color: var(--font-color);
      border-right: 1px solid var(--hover-font-color);
      border-left: 1px solid var(--hover-font-color);
      background-color: var(--opacity-bg-color);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }

  & .mantine-Select-dropdown {
    background-color: var(--secondary-bg-color);
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    div {
      gap: 10px;
    }
  }
`;

const data = [
  { value: 'computer-it', label: '컴퓨터 / IT', group: CATEGORY['computer-it'] },
  { value: 'programming', label: '프로그래밍', group: CATEGORY['computer-it'] },
  { value: 'computer', label: '컴퓨터', group: CATEGORY['computer-it'] },
  { value: 'mobile', label: '모바일', group: CATEGORY['computer-it'] },
  { value: 'game', label: '게임', group: CATEGORY.game },
  { value: 'fps', label: 'FPS', group: CATEGORY.game },
  { value: 'mmorpg', label: 'MMORPG', group: CATEGORY.game },
  { value: 'aos', label: 'AOS', group: CATEGORY.game },
  { value: '', label: '전체', group: null },
];

const CategorySelect = ({ currentValue, setCurrentValue }) => (
  <Select
    value={currentValue}
    onChange={setCurrentValue}
    placeholder="카테고리 선택"
    icon={<RiHashtag />}
    dropdownPosition="bottom"
    data={data ?? []}
    radius="10px"
    zIndex={10}
    clearable
    transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
  />
);

export default CategorySelect;
