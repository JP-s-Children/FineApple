import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Accordion, Container, Radio, Title } from '@mantine/core';
import { myProfileQuery } from '../../../queries';
import { MyProductListPanel, SelectProductAccordion } from '../..';

const PanelContainer = styled(Container)`
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  color: var(--font-color);

  .mantine-Accordion-item,
  .mantine-Accordion-itemTitle,
  .mantine-Accordion-control {
    background: none;
    border-color: var(--font-color);
  }

  .mantine-Accordion-chevron {
    color: var(--font-color);
  }
`;

const SelectProductRadio = ({ value, onChange }) => {
  const { data: userInfo } = useQuery(myProfileQuery());

  return (
    <PanelContainer>
      <Radio.Group value={value} onChange={onChange}>
        <Accordion variant="default">
          {userInfo?.products.length > 0 && (
            <Accordion.Item value="나의 기기 목록">
              <Accordion.Control>
                <Title size="lg" c={'var(--font-color)'}>
                  나의 기기 목록
                </Title>
              </Accordion.Control>
              <MyProductListPanel products={userInfo.products} selectedProductType={value} />
            </Accordion.Item>
          )}

          <Accordion.Item value="제품 목록">
            <Accordion.Control>
              <Title size="lg" c={'var(--font-color)'}>
                제품 목록
              </Title>
            </Accordion.Control>
            <Accordion.Panel>
              <SelectProductAccordion selectedProductType={value} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Radio.Group>
    </PanelContainer>
  );
};

export default SelectProductRadio;
