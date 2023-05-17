import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Title } from '@mantine/core';
import { QUESTION_PATH } from '../../../constants/routes';

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5rem;
  padding: 3rem 2rem;
  width: 100%;
  border-radius: 20px;
  background-color: var(--secondary-bg-color);
`;

const EmptyPostIndicator = ({ isButtonShown }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title mb="0.5rem" fz="2rem" fw="500" ta="center">
        작성한 글이 없습니다 👷🏻‍♂️
      </Title>
      {isButtonShown && (
        <Button onClick={() => navigate(QUESTION_PATH)} w="300px" h="50px" radius="10px" fz="lg">
          질문하기
        </Button>
      )}
    </Container>
  );
};

export default EmptyPostIndicator;
