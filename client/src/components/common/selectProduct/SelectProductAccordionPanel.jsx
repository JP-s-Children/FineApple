import React from 'react';
import styled from '@emotion/styled';
import { Accordion, Flex, Text, Image, Radio } from '@mantine/core';
import productThumbnail from '../../../constants/productThumbnail';

const RadioInput = styled(Radio)`
  flex-basis: calc(25% - 10px);
  width: 100%;
  height: 100%;
  background: var(--opacity-bg-color);
  border: ${({ checked }) => (checked ? '1px solid var(--hover-font-color)' : '1px solid #e5e5e5')};
  border-radius: 10px;
  cursor: pointer;

  :hover {
    border: 1px solid var(--hover-font-color);
  }

  input,
  svg {
    display: none;
  }
  label {
    padding: 0;
    cursor: pointer;
  }

  .mantine-Radio-labelWrapper {
    width: 100%;
  }

  .mantine-Accordion-item:last-child {
    border: none;
  }

  .mantine-Text-root {
    padding-left: 8px;
    font-size: 15px;
    color: ${({ checked }) => (checked ? 'var(--hover-font-color)' : 'var(--font-color)')};
  }
`;

const ItemCard = styled(Flex)`
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 5px 12px;
`;

const ItemImage = styled(Image)`
  max-width: 40px;
  max-height: 40px;

  img {
    max-width: 40px;
    max-height: 40px;
    object-fit: scale-down !important;
  }
`;

const SelectProductAccordionPanel = ({ productTypes, selectedProductType }) => (
  <Accordion.Panel>
    <Flex ml="10px" gap="10px" wrap="wrap">
      {Object.entries(productTypes).map(([productType, productName]) => (
        <React.Fragment key={productType}>
          <RadioInput
            checked={selectedProductType === productType}
            value={productType}
            label={
              <ItemCard>
                <ItemImage src={productThumbnail[productType]} alt={`product-${productType}`} />
                <Text size="md" c={'var(--font-color)'} w="100%">
                  {productName}
                </Text>
              </ItemCard>
            }
          />
        </React.Fragment>
      ))}
    </Flex>
  </Accordion.Panel>
);

export default SelectProductAccordionPanel;
