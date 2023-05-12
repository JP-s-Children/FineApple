import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import styled from '@emotion/styled';
import { Button, Container } from '@mantine/core';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerProduct } from '../api/profile';
import { PROFILE_PATH } from '../routes/routePaths';
import { SelectProduct, SelectedProduct } from '../components';
import useToast from '../hooks/useToast';

const Title = styled.h1`
  color: var(--font-color);
  text-align: center;
  font-size: 3.5rem;
  padding: 50px 0;
`;

const registerProductScheme = z
  .object({
    productType: z.string().regex(/.+/),
  })
  .required();

const RegisterProduct = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerProductScheme),
  });

  const {
    field: { value: selectedProductType, onChange },
  } = useController({ name: 'productType', control, defaultValue: '' });

  const onSubmit = async data => {
    try {
      await registerProduct(data);
      toast.success({ message: '기기 등록이 완료되었습니다.' });
      navigate(PROFILE_PATH);
    } catch (e) {
      toast.error({ message: '기기 등록에 실패하였습니다. 잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <Container>
      <Title>기기 등록</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectProduct selectedProductType={selectedProductType} onChange={onChange} />

        <SelectedProduct selectedProductType={selectedProductType} />

        <Container align="center" mb="30px">
          <Button type="submit" size="lg" w="100%" disabled={!isDirty && !isValid} loading={isSubmitting}>
            등록하기
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default RegisterProduct;
