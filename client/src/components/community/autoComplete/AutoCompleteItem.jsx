import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { Flex, Text } from '@mantine/core';
import { AvatarIcon } from '../..';
import { POST_PATH } from '../../../routes/routePaths';

const Container = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--font-color);
  cursor: pointer;

  &[data-hovered='true'],
  &:hover {
    div {
      font-weight: 600;
    }
    border-bottom: 1px solid #e1e1e1;
    background-color: var(--opacity-bg-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

const Content = styled(Text)`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 400;
  text-align: start;
  word-break: keep-all;
`;

const AutoCompleteItem = React.forwardRef(({ title, id, avatarId, ...option }, ref) => {
  const navigate = useNavigate();

  return (
    <Container ref={ref} onClick={() => navigate(`${POST_PATH}/${id}`)} {...option}>
      <Flex justify="flex-start" align="center" p="20px">
        <AvatarIcon avatarId={avatarId} />
        <Content>{title}</Content>
      </Flex>
    </Container>
  );
});

export default AutoCompleteItem;
