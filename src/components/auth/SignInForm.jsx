/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Stack, Input, Button } from '@mantine/core';
import userState from '../../recoil/atoms/userState';
import { MAIN_PATH } from '../../constants/routes';
import { InputWrapper } from '../common/form';
import { authSignIn } from '../../services/auth';
import useToast from '../../hooks/useToast';

const signinScheme = z.object({
  email: z.string().email({ message: '이메일 형식에 맞게 입력해 주세요.' }),
  password: z.string().regex(/^[0-9a-zA-Z]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const [errorMessage, setErrorMessage] = React.useState('');
  const toast = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinScheme), shouldFocusError: true });

  const onSubmit = async data => {
    try {
      const userData = await authSignIn(data);

      setUser(userData);
      navigate(MAIN_PATH);
    } catch (e) {
      reset();
      toast.error({ message: '아이디와 비밀번호를 다시 확인해 주세요.' });
      setErrorMessage(e.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack w="340px" spacing="12px">
        <InputWrapper label="이메일" error={errors?.email?.message}>
          <Input {...register('email')} placeholder="FineApple ID" autoFocus />
        </InputWrapper>
        <InputWrapper label="비밀번호" error={errorMessage || errors?.password?.message}>
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
