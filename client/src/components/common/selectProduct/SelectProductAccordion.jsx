import React from 'react';
import { Accordion, Title } from '@mantine/core';
import SelectProductAccordionPanel from './SelectProductAccordionPanel';
import { ipadProductTypes, iphoneProductTypes, macbookProductTypes } from '../../../constants/productList';

/**
 * @param {{
 * selectedProductType: string,
 * productCategoryList: Array<{
 *  categoryType: string, productTypes: Record<string, string>
 * }>
 * multiple?: boolean
 * }} props
 */
const SelectProductAccordion = ({ selectedProductType, multiple = false }) => {
  const productCategoryList = [
    { categoryType: 'iPhone', productTypes: iphoneProductTypes },
    { categoryType: 'iPad', productTypes: ipadProductTypes },
    { categoryType: 'Macbook', productTypes: macbookProductTypes },
  ];

  return (
    <Accordion variant="contained" multiple={multiple} radius="10px">
      {productCategoryList.map(({ categoryType, productTypes }) => (
        <Accordion.Item value={categoryType} key={categoryType}>
          <Accordion.Control>
            <Title size="lg" c={'var(--font-color)'}>
              {categoryType}
            </Title>
          </Accordion.Control>
          <SelectProductAccordionPanel productTypes={productTypes} selectedProductType={selectedProductType} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SelectProductAccordion;
