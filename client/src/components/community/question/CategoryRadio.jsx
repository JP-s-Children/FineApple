import React from 'react';
import styled from '@emotion/styled';
import { Radio, Flex, Text, Image, Container } from '@mantine/core';
import categoryList from '../../../constants/categoryList';

const RadioInput = styled(Radio)`
  input,
  svg {
    display: none;
  }

  label {
    padding: 0;
  }

  .mantine-Radio-labelWrapper {
    width: 100%;
  }
`;

const RadioLabel = styled(Container)`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  align-items: center;
  color: ${({ checked }) => (checked ? 'var(--hover-font-color)' : 'var(--font-color)')};
  border: ${({ checked }) => (checked ? '1px solid var(--hover-font-color)' : '1px solid #e5e5e5')};
  border-radius: 10px;
  cursor: pointer;

  img {
    max-width: 40px;
    max-height: 40px;
    width: content-fit;
    object-fit: scale-down !important;
  }

  .mantine-Image-root {
    width: fit-content !important;
  }
`;

const CategoryRadio = ({ value, onChange, onResetProduct }) => (
  <Radio.Group value={value} onChange={onChange} px="10px">
    <Flex gap="2%">
      {categoryList.map(({ imgPath, category }) => (
        <RadioInput
          key={category}
          value={category}
          onClick={onResetProduct}
          w="32%"
          active={category}
          label={
            <RadioLabel checked={value === category}>
              <Image src={imgPath} alt="imgPath" />
              <Text ml="lg" fz="15px">
                {category}
              </Text>
            </RadioLabel>
          }
        />
      ))}
    </Flex>
  </Radio.Group>
);

export default CategoryRadio;
