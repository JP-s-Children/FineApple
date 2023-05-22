import React from 'react';
import styled from '@emotion/styled';
import { useController } from 'react-hook-form';
import { Chip, Flex } from '@mantine/core';
import { CATEGORY_INFO } from '../../constants/category';

const CategoryChip = styled(Chip)`
  .mantine-Chip-input {
    height: fit-content;
  }
`;

const SelectInterestCategories = ({ control }) => {
  const {
    field: { value: selectedCategories, onChange },
  } = useController({ name: 'interestCategories', control });

  return (
    <Flex gap="sm" mt="10px" w="100%" wrap="wrap">
      <Chip.Group multiple value={selectedCategories} onChange={checked => onChange(checked)}>
        {Object.entries(CATEGORY_INFO).map(([categoryType, { name }]) => (
          <CategoryChip key={categoryType} value={categoryType} variant="filled">
            {name}
          </CategoryChip>
        ))}
      </Chip.Group>
    </Flex>
  );
};

export default SelectInterestCategories;
