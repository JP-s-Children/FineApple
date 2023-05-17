import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { FaLocationArrow } from 'react-icons/fa';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Container, Divider, Flex, List, Text, Title } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { Comment, ShowMoreButton, TextEditor } from '..';
import useCommentsQuery from '../../../hooks/queries/useCommentsQuery';
import useTextEditor from '../../../hooks/useTextEditor';
import useAdoptedCommentQuery from '../../../hooks/queries/useAdoptedCommentQuery';

const CommentsContainer = styled.section`
  margin-top: 2.5rem;
`;

const CommentsHeader = styled(Flex)`
  position: sticky;
  top: 56.5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 10px;
  background-color: var(--body-bg-color);
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
`;

const CommentList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 720px;
`;

const CommentSection = ({ postInfo, mutateFns }) => {
  const adoptedComment = useAdoptedCommentQuery({ postId: postInfo.id });
  const {
    data: { comments, totalLength },
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useCommentsQuery({ postId: postInfo.id });

  const user = useRecoilValue(userState);

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 180,
  });

  const [textEditorContent, setTextEditorContent] = React.useState('');
  const editor = useTextEditor({
    initContent: textEditorContent,
    placeholder: '의견을 알려주세요.',
    option: {
      onUpdate: ({ editor }) => setTextEditorContent(editor.getHTML()),
    },
  });

  // TODO : 유저 정보 받아서 넘기기
  const handleAddCommentClick = () => {
    mutateFns.createMutate(
      {
        commentInfo: {
          postId: postInfo.id,
          like: [],
          adopted: false,
          // author: user.email,
          // nickName: user.nickName,
          // avatarId: user.avatarId,
          content: textEditorContent,
        },
      },
      {
        onSuccess: async () => {
          refetch();
        },
      }
    );
    editor.commands.clearContent();
    editor.commands.focus();
  };

  return (
    <CommentsContainer>
      <CommentsHeader>
        <Flex gap="10px" mb="10px" align="center" fw="600">
          <Text fz="2rem" mt="1px">
            답글
          </Text>
          <Text c="blue" fz="2.5rem">
            {totalLength}
          </Text>
        </Flex>

        {/* 로그인한 유저에게만 노출한다. */}
        {
          <Button
            variant="subtle"
            radius="xl"
            onClick={() => {
              editor.commands.focus();
              scrollIntoView({ alignment: 'start' });
            }}>
            <Text mr="8px" fz="1rem">
              답글 작성하기
            </Text>
            <FaLocationArrow size="16" />
          </Button>
        }
      </CommentsHeader>
      <CommentList>
        {adoptedComment && <Comment comment={adoptedComment} postInfo={postInfo} mutateFns={mutateFns} />}
      </CommentList>
      {comments.length > 0 && <Divider mt="2rem" variant="dashed" />}

      {/* 로그인한 유저에게만 노출한다. */}
      {
        <Container miw="990px" my="20px" ref={targetRef}>
          <Title m="5rem 0 2rem" ta="center" fz="2rem">
            💿 궁금한 점이 있다면 의견을 남겨주세요.
          </Title>
          <TextEditor editor={editor} />
          <Flex justify="center">
            <Button
              disabled={textEditorContent.replace(/<\/p>/gi, '').trim() === ''}
              mt="1rem"
              ml="auto"
              fz="14px"
              w={90}
              radius="xl"
              onClick={handleAddCommentClick}>
              글쓰기
            </Button>
          </Flex>
        </Container>
      }
      {comments.length > 0 && <Divider mb="4rem" variant="dashed" />}
      <CommentList>
        {comments.map(comment => (
          <Comment
            key={`${comment.id}_${comment.content}`}
            comment={comment}
            postInfo={postInfo}
            mutateFns={mutateFns}
          />
        ))}
      </CommentList>
      {hasNextPage && <ShowMoreButton loading={isFetchingNextPage} onClick={fetchNextPage} />}
    </CommentsContainer>
  );
};

export default CommentSection;
