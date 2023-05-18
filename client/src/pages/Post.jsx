import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Divider } from '@mantine/core';
import { postDetailQuery } from '../queries';
import { PostContent, CommentSection, CommentLoader } from '../components';
import {
  useCreateCommentMutation,
  useEditCommentMutation,
  useRemoveCommentMutation,
  useToggleCommentAdoptedMutation,
  useToggleCertifiedMutation,
} from '../hooks/mutations';

const Wrapper = styled(Container)`
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

// [] todo: postInfo의 author, certified auth 연결 후 임의 데이터 수정 필요
const Post = () => {
  const { postId } = useParams();
  const { data: post } = useQuery(postDetailQuery(postId));

  const mutateFns = {
    editMutate: useEditCommentMutation(postId),
    removeMutate: useRemoveCommentMutation(postId),
    createMutate: useCreateCommentMutation(postId),
    toggleAdoptedMutate: useToggleCommentAdoptedMutation(postId),
    toggleCertifiedMutate: useToggleCertifiedMutation(postId),
  };

  return (
    <Wrapper>
      <PostContent post={post} />
      <Divider variant="dashed" />
      <React.Suspense fallback={<CommentLoader />}>
        <CommentSection postInfo={post} mutateFns={mutateFns} />
      </React.Suspense>
    </Wrapper>
  );
};

export default Post;
