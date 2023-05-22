import React from 'react';
import { Container, Title } from '@mantine/core';
import { SignUpForm } from '../components/auth';

const SignUp = () => (
  <Container c="var(--font-color)" py="48px" size="xs">
    <Title mb="xl" align="center">
      FineApple ID 생성
    </Title>
    <SignUpForm />
  </Container>
);
export default SignUp;
