/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Stack, Input, Button } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { signIn } from '../../api/auth';
import { MAIN_PATH } from '../../routes/routePaths';
import { InputWrapper } from '../common/form';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const SignInForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinScheme), shouldFocusError: true });

  const [errorMessage, setErrorMessage] = React.useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const onSubmit = async data => {
    try {
      const { data: user } = await signIn(data);

      setUser(user);
      navigate(MAIN_PATH);
    } catch (e) {
      setErrorMessage(e.response.data.error);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack w="340px" spacing="12px">
        <InputWrapper label="이메일" error={errors?.email?.message}>
          <Input {...register('email')} placeholder="FineApple ID" autoFocus />
        </InputWrapper>
        <InputWrapper error={errorMessage || errors?.password?.message}>
          <Input type="password" {...register('password')} placeholder="암호" />
        </InputWrapper>
        <Button type="submit" mt="xl" size="lg" radius="10px">
          로그인
        </Button>
      </Stack>
    </form>
  );
};

export default SignInForm;
