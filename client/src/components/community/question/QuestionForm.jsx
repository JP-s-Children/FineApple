import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Input, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { InputWrapper } from '../../common';
import { SubjectSelect, ContentEditor } from '..';
// import { addPost } from '../../../api/post';
import { POST_PATH } from '../../../routes/routePaths';
import userState from '../../../recoil/atoms/userState';
import useToast from '../../../hooks/useToast';
import { createPost } from '../../../../firebase/posts';

const TitleInput = styled(Input)`
  input {
    font-size: 20px;
    font-weight: bold;
  }
`;

const questionScheme = z.object({
  title: z.string().regex(/.+/, { message: '제목을 입력해주세요' }),
  content: z.string({ required_error: '질문 하실 내용을 입력해주세요' }),
  subject: z.object({
    category: z.string().regex(/.+/, { message: '카테고리를 선택해주세요' }),
    productType: z.string(),
  }),
});

const QuestionForm = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const toast = useToast();

  const { handleSubmit, register, control, formState } = useForm({
    resolver: zodResolver(questionScheme),
  });

  const onSubmit = async data => {
    try {
      const { title, content, subject } = data;

      const postId = await createPost({ author: user.email, title, content, ...subject });

      navigate(`${POST_PATH}/${postId}`);
      toast.success({ message: '작성하신 글이 등록되었습니다.' });
    } catch (e) {
      toast.error({ message: '글 작성에 실패하였습니다. 잠시 후 다시 시도해주세요' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="xl">
        <InputWrapper>
          <TitleInput {...register('title')} placeholder="게시글 제목" />
        </InputWrapper>
        <ContentEditor name="content" control={control} />
        <SubjectSelect name="subject" control={control} />
        {formState.isValid && (
          <Text mt="20px" c="var(--font-color)" ta="center" fz="1rem">
            작성한 글이 수정되지 않으므로, 신중하게 작성해 주세요.
          </Text>
        )}
        <Button type="submit" size="lg" radius="10px" disabled={!formState.isValid}>
          글쓰기
        </Button>
      </Flex>
    </form>
  );
};

export default QuestionForm;
