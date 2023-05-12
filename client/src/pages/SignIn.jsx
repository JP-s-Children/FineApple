import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Title, Text, Flex } from '@mantine/core';
import { WiDirectionUpRight } from 'react-icons/wi';
import { SignInForm } from '../components/auth';
import { SIGNUP_PATH } from '../routes/routePaths';

const LinkBox = styled.span`
  display: inline-block;
  transform: translateY(8px);
`;

const SignIn = () => (
  <Flex py="48px" c="var(--font-color)" direction="column" align="center" gap="8px" h="100vh">
    <Title fz="28px" mb="24px" order={2}>
      FineApple Store에 로그인하세요
    </Title>
    <SignInForm />
    <Text fz="14px">
      {'FineApple ID가 없으십니까? '}
      <Link to={SIGNUP_PATH}>
        {'지금 만드세요.'}
        <LinkBox>
          <WiDirectionUpRight size="24" />
        </LinkBox>
      </Link>
    </Text>
  </Flex>
);

export default SignIn;
