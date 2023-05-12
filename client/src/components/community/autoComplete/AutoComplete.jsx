import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Autocomplete } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import useAutoCompleteQuery from '../../../hooks/queries/useAutoCompleteQuery';
import { POST_PATH } from '../../../routes/routePaths';
import { AutoCompleteItem, NothingFound } from '.';

const CommunityAutoComplete = styled(Autocomplete)`
  & .mantine-Autocomplete-wrapper {
    margin: 0 auto;
    width: ${({ wrapperwidth }) => `${wrapperwidth}px`};
  }

  & .mantine-Autocomplete-input {
    padding-left: 3rem;
    height: 50px;
    font-size: 21px;
    border-radius: 10px;
    color: var(--font-color);
    background-color: var(--secondary-bg-color);
  }

  & .mantine-Autocomplete-icon {
    width: 50px;
    font-size: 21px;
  }

  & .mantine-Autocomplete-dropdown {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    background-color: var(--secondary-bg-color);
    div {
      gap: 10px;
    }
  }
`;

const LIMIT_OF_POSTS = 10;

const AutoComplete = ({ width = 620, queryFn, category = '', subCategory = '' }) => {
  const [value, setValue] = React.useState('');
  const [debounced] = useDebouncedValue(value, 500);

  const navigate = useNavigate();

  const posts = useAutoCompleteQuery({ inputValue: debounced, queryFn, category, subCategory });

  return (
    <CommunityAutoComplete
      icon={<FiSearch />}
      wrapperwidth={width}
      zIndex={10}
      dropdownPosition="bottom"
      placeholder="검색하기"
      value={value}
      limit={LIMIT_OF_POSTS}
      itemComponent={AutoCompleteItem}
      data={posts ?? []}
      onItemSubmit={item => {
        navigate(`${POST_PATH}/${item.id}`);
        setValue('');
      }}
      onChange={setValue}
      nothingFound={<NothingFound />}
      filter={() => true}
      transitionProps={{
        transition: 'pop-top-left',
        duration: 80,
        timingFunction: 'ease',
      }}
    />
  );
};

export default AutoComplete;
