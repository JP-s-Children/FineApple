import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Input, Button, Text, Skeleton, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { InputWrapper } from '../../common';
import { ContentEditor, SelectCategory } from '..';

import { POST_PATH } from '../../../constants/routes';
import userState from '../../../recoil/atoms/userState';
import useToast from '../../../hooks/useToast';
import { createPost } from '../../../services/posts';

const TitleInput = styled(Input)`
  input {
    font-size: 20px;
    font-weight: bold;
  }
`;

const questionScheme = z.object({
  title: z.string().regex(/.+/, { message: '제목을 입력해주세요' }),
  content: z.string({ required_error: '질문 하실 내용을 입력해주세요' }),
  category: z.object({
    category: z.string().regex(/.+/, { message: '카테고리를 선택해주세요' }),
    subCategory: z.string(),
  }),
});

const QuestionForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const user = useRecoilValue(userState);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(questionScheme),
  });

  const onSubmit = async ({ title, content, category }) => {
    try {
      const postId = await createPost({ author: user.email, title, content, ...category });
      navigate(`${POST_PATH}/${postId}`);
      toast.success({ message: '작성하신 글이 등록되었습니다.' });
    } catch (e) {
      toast.error({ message: '글 작성에 실패하였습니다. 잠시 후 다시 시도해주세요' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="xl">
        <InputWrapper error={errors?.title?.message}>
          <TitleInput {...register('title')} placeholder="게시글 제목" />
        </InputWrapper>

        <InputWrapper error={errors?.content?.message}>
          <ContentEditor name="content" control={control} />
        </InputWrapper>

        <Title order={4} mt="40px">
          어떤 주제에 대한 것입니까?
        </Title>

        <InputWrapper error={errors?.category?.category?.message}>
          <React.Suspense fallback={<Skeleton height="100px" />}>
            <SelectCategory name="category" control={control} />
          </React.Suspense>
        </InputWrapper>

        <Flex direction="column">
          <Button type="submit" size="lg" radius="10px" mt="lg">
            글쓰기
          </Button>
          <Text mt="5px" c="gray" ta="center" fz="0.9rem">
            작성한 글이 수정되지 않으므로, 신중하게 작성해 주세요.
          </Text>
        </Flex>
      </Flex>
    </form>
  );
};

export default QuestionForm;
