import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { useController } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { Chip, Container, Flex, Group, Text } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { myProfileQuery } from '../../../queries';
import { CATEGORY_INFO } from '../../../constants/category';

const Wrapper = styled(Container)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 20px;
  border-radius: 10px;
  width: 100%;
`;

const CategoryChip = styled(Chip)`
  .mantine-Chip-input {
    height: fit-content;
  }
`;

const DEFAULT_VALUE = {
  category: '',
  subCategory: '',
};

const computerItTypes = Object.entries(CATEGORY_INFO).filter(
  ([categoryType, { category }]) => category === 'computer-it' && categoryType !== category
);

const gameTypes = Object.entries(CATEGORY_INFO).filter(
  ([categoryType, { category }]) => category === 'game' && categoryType !== category
);

const SelectCategory = ({ name, control }) => {
  const user = Recoil.useRecoilValue(userState);

  const {
    data: { interestCategories },
  } = useQuery(myProfileQuery(user.email));

  const interestCategoryList = Object.entries(CATEGORY_INFO).filter(
    ([categoryType, { category }]) => interestCategories.includes(categoryType) && categoryType !== category
  );

  const {
    field: { value: selectedCategory, onChange },
  } = useController({
    control,
    name,
    defaultValue: DEFAULT_VALUE,
  });

  const onChangeCategory = subCategory => {
    const category = computerItTypes.map(([categoryType]) => categoryType).includes(subCategory)
      ? 'computer-it'
      : gameTypes.map(([categoryType]) => categoryType).includes(subCategory)
      ? 'game'
      : '';

    onChange({ category, subCategory });
  };

  return (
    <Container w="100%" p="0">
      <Chip.Group value={selectedCategory.subCategory} onChange={onChangeCategory}>
        <Flex direction="column" w="100%" align="start" gap="sm">
          {interestCategories.length > 0 && (
            <Wrapper>
              <Text fz="md" fw="bold">
                관심 카테고리
              </Text>
              <Group mt="sm">
                {interestCategoryList.map(([categoryType, { name }]) => (
                  <CategoryChip key={categoryType} value={categoryType} variant="filled">
                    {name}
                  </CategoryChip>
                ))}
              </Group>
            </Wrapper>
          )}

          <Wrapper>
            <Group>
              <Text fz="md" fw="bold">
                컴퓨터/IT
              </Text>
              {computerItTypes.map(([categoryType, { name }]) => (
                <CategoryChip key={categoryType} value={categoryType} variant="filled">
                  {name}
                </CategoryChip>
              ))}
            </Group>

            <Group mt="sm">
              <Text fz="md" fw="bold">
                게임
              </Text>
              {gameTypes.map(([categoryType, { name }]) => (
                <CategoryChip key={categoryType} value={categoryType} variant="filled">
                  {name}
                </CategoryChip>
              ))}
            </Group>
          </Wrapper>
        </Flex>
      </Chip.Group>
    </Container>
  );
};

export default SelectCategory;
