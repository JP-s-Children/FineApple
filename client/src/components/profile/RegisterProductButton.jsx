import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { FAV_CATEGORY_PATH } from '../../routes/routePaths';

const RegisterProductButton = () => {
  const navigate = useNavigate();

  return (
    <Button radius="xl" size="md" w="fit-content" onClick={() => navigate(FAV_CATEGORY_PATH)}>
      관심 카테고리 등록
    </Button>
  );
};

export default RegisterProductButton;
