import styled from '@emotion/styled';
import { Accordion, Text } from '@mantine/core';
import React from 'react';

const Wrapper = styled(Accordion)`
  margin-top: 12px;

  .mantine-Accordion-item,
  .mantine-Accordion-itemTitle,
  .mantine-Accordion-control {
    background: var(--opacity-bg-color);
    border-color: var(--opacity-border-color);
  }
`;

const Item = styled(Accordion.Item)`
  .mantine-Accordion-item {
    border: 1px solid red;
  }
`;

const ItemTitle = styled(Text)`
  color: var(--font-color);
  font-size: 1.2rem;
  font-weight: 500;
`;

const ItemContent = styled(Text)`
  color: var(--font-color);
  font-size: 1.1rem;
  text-align: justify;
  padding: 10px;
`;

const Faq = ({ faqList }) => (
  <Wrapper multiple variant="separated" w="100%">
    {faqList.map(({ title, content }, idx) => (
      <Item key={idx} value={`faq-${title}`}>
        <Accordion.Control>
          <ItemTitle>{title}</ItemTitle>
        </Accordion.Control>
        <Accordion.Panel>
          <ItemContent>{content}</ItemContent>
        </Accordion.Panel>
      </Item>
    ))}
  </Wrapper>
);

export default Faq;
