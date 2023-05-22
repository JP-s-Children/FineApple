import React from 'react';
import { useNavigate } from 'react-router';
import { Text, Button } from '@mantine/core';
import { QUESTION_PATH } from '../../../constants/routes';

const NothingFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text fz="xl" fw="600" c={`var(--font-color)`}>
        커뮤니티에서 비슷한 질문을 찾지 못했습니다 🙅‍♂️
      </Text>
      <Button radius="10px" mt="10px" onClick={() => navigate(QUESTION_PATH)}>
        질문하기
      </Button>
    </>
  );
};

export default NothingFound;
