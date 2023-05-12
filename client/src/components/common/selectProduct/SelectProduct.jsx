import React from 'react';
import styled from '@emotion/styled';
import { Container, Radio } from '@mantine/core';
import SelectProductAccordion from './SelectProductAccordion';

const Wrapper = styled(Container)`
  color: var(--font-color);
  padding: 0;

  & > div > div.mantine-Accordion-item {
    border: none;
  }

  .mantine-Accordion-item,
  .mantine-Accordion-itemTitle,
  .mantine-Accordion-control {
    background: none;
  }

  .mantine-Accordion-chevron {
    color: var(--font-color);
  }
`;

/**
 * @param {{
 * selectedProductType: string,
 * onChange: (e) => void
 * }} props
 */
const SelectProduct = ({ selectedProductType, onChange }) => (
  <Container w="100%">
    <Wrapper>
      <Radio.Group value={selectedProductType} onChange={onChange}>
        <SelectProductAccordion selectedProductType={selectedProductType} multiple={true} />
      </Radio.Group>
    </Wrapper>
  </Container>
);

export default SelectProduct;
