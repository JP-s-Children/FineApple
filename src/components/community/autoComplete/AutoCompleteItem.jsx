import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router';
import { Flex, Text } from '@mantine/core';
import { POST_PATH } from '../../../constants/routes';

const Container = styled.div`
  padding: 0.5rem 0;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--font-color);
  cursor: pointer;

  &[data-hovered='true'],
  &:hover {
    div {
      font-weight: 500;
    }
    border-right: 1px solid var(--hover-font-color);
    border-left: 1px solid var(--hover-font-color);

    background-color: var(--third-bg-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const Content = styled(Text)`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  text-align: start;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const AutoCompleteItem = React.forwardRef(({ title, id, ...option }, ref) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container ref={ref} onClick={() => navigate(`${POST_PATH}/${id}`)} {...option}>
      <Flex justify="flex-start" align="center" p="20px" w={pathname === '/' ? '630px' : '800px'}>
        <Content>{title}</Content>
      </Flex>
    </Container>
  );
});

export default AutoCompleteItem;
