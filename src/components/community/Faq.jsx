import React from 'react';
import styled from '@emotion/styled';
import { Accordion, Text, Container } from '@mantine/core';

const Wrapper = styled(Container)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const AccordionContainer = styled(Accordion)`
  margin-top: 12px;

  .mantine-Accordion-item,
  .mantine-Accordion-itemTitle,
  .mantine-Accordion-control {
    background: var(--opacity-bg-color);
    border-color: var(--opacity-border-color);
    border-radius: 10px;
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
  margin-top: 10px;
  padding: 10px;
  color: var(--font-color);
  font-size: 1.1rem;
  text-align: justify;
`;

const Faq = ({ faqList }) => (
  <Wrapper>
    <AccordionContainer multiple variant="separated" w="100%">
      {faqList.map(({ title, content }, idx) => (
        <Item key={idx} value={`faq-${title}`}>
          <Accordion.Control>
            <ItemTitle>{title}</ItemTitle>
          </Accordion.Control>
          <Accordion.Panel>
            <ItemContent>
              {content.map(item => (
                <Text key={item} py="0.4rem">
                  {item}
                </Text>
              ))}
            </ItemContent>
          </Accordion.Panel>
        </Item>
      ))}
    </AccordionContainer>
  </Wrapper>
);

export default Faq;
