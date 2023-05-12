import React from 'react';
import styled from '@emotion/styled';
import { useController } from 'react-hook-form';
import { Container, Title } from '@mantine/core';
import { CategoryRadio, SelectProductRadio, SelectedCategoryAndProductType } from '..';
import { ipadProductTypes, iphoneProductTypes, macbookProductTypes } from '../../../constants/productList';
import { CATEGORY } from '../../../constants/category';

const Wrapper = styled(Container)`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  padding: 30px 20px;
  border-radius: 10px;
`;

const DEFAULT_VALUE = {
  category: '',
  productType: '',
};

const iphoneTypes = Object.keys(iphoneProductTypes);
const ipadTypes = Object.keys(ipadProductTypes);
const macTypes = Object.keys(macbookProductTypes);

const SubjectSelect = ({ name, control }) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    defaultValue: DEFAULT_VALUE,
  });

  const onChangeProduct = productType => {
    const category = iphoneTypes.includes(productType)
      ? CATEGORY.iphone
      : ipadTypes.includes(productType)
      ? CATEGORY.ipad
      : macTypes.includes(productType)
      ? CATEGORY.mac
      : '';

    onChange({ category, productType });
  };

  return (
    <>
      <Container w="100%" p="0">
        <Title order={4} mt="40px" mb="20px">
          어떤 주제에 대한 것입니까?
        </Title>
        <Wrapper>
          <CategoryRadio
            value={value.category}
            onChange={category => onChange({ category, productType: '' })}
            onResetProduct={() => onChange(DEFAULT_VALUE)}
          />
          <SelectProductRadio value={value.productType} onChange={onChangeProduct} />
        </Wrapper>
      </Container>
      <SelectedCategoryAndProductType selectedCategoryType={value.category} selectedProductType={value.productType} />
    </>
  );
};

export default SubjectSelect;
