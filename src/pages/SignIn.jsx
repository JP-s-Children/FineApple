import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Title, Text, Flex } from '@mantine/core';
import { WiDirectionUpRight } from 'react-icons/wi';
import { SignInForm } from '../components/auth';
import { SIGNUP_PATH } from '../constants/routes';

const LinkBox = styled.span`
  display: inline-block;
  transform: translateY(8px);
`;

const SignUpLink = styled(Link)`
  margin-left: 6px;
`;

const SignIn = () => (
  <Flex py="48px" c="var(--font-color)" direction="column" align="center" gap="8px" h="100vh">
    <Title fz="32px" mb="24px" order={2}>
      FineApple 로그인
    </Title>
    <SignInForm />
    <Text fz="14px">
      {'FineApple ID가 없으신가요? '}
      <SignUpLink to={SIGNUP_PATH}>
        {'지금 만드세요.'}
        <LinkBox>
          <WiDirectionUpRight size="24" />
        </LinkBox>
      </SignUpLink>
    </Text>
  </Flex>
);

export default SignIn;
