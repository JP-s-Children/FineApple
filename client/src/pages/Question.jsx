import React from 'react';
import { Container, Title } from '@mantine/core';
import { QuestionForm } from '../components';

const Question = () => (
  <Container my="xl" py="xl" c="var(--font-color)">
    <Title my="xl" order={2}>
      💿 새 게시물 작성하기
    </Title>
    <QuestionForm />
  </Container>
);

export default Question;
