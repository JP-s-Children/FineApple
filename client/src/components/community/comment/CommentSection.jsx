import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { FaLocationArrow } from 'react-icons/fa';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Container, Divider, Flex, List, Text, Title } from '@mantine/core';
import userState from '../../../recoil/atoms/userState';
import { Comment, ShowMoreButton, TextEditor } from '..';
import { getComments } from '../../../api/post';
import useCommentsQuery from '../../../hooks/queries/useCommentsQuery';
import useTextEditor from '../../../hooks/useTextEditor';

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
  const user = useRecoilValue(userState);
  const [textEditorContent, setTextEditorContent] = React.useState('');

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useCommentsQuery({
    queryFn: getComments,
    param: postInfo.id,
    select: data => {
      const comments = data.pages.map(({ comments }) => comments).flat();

      return {
        isAdmin: data.pages[0].isAdmin,
        certifiedComment: comments.find(({ certified }) => certified),
        comments: comments.filter(({ certified }) => !certified),
        totalLength: data.pages[0].totalLength,
        isOneOfCommentsIsUseful: comments.some(({ useful }) => useful),
      };
    },
  });

  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 180,
  });

  const editor = useTextEditor({
    initContent: textEditorContent,
    placeholder: '의견을 알려주세요.',
    option: {
      onUpdate: ({ editor }) => setTextEditorContent(editor.getHTML()),
    },
  });

  const handleAddCommentClick = () => {
    mutateFns.addMutate(
      {
        commentInfo: {
          postId: postInfo.id,
          author: user.email,
          nickName: user.nickName,
          avatarId: user.avatarId,
          content: textEditorContent,
          createAt: new Date(),
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
            {data.totalLength}
          </Text>
        </Flex>
        {user && (
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
        )}
      </CommentsHeader>
      <CommentList>
        {data.certifiedComment && (
          <Comment
            comment={data.certifiedComment}
            postInfo={postInfo}
            isAdmin={data.isAdmin}
            isOneOfCommentsIsUseful={data.isOneOfCommentsIsUseful}
            mutateFns={mutateFns}
          />
        )}
      </CommentList>
      {data.comments.length > 0 && <Divider mt="2rem" variant="dashed" />}
      {user && (
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
      )}
      {data.comments.length > 0 && <Divider mb="4rem" variant="dashed" />}
      <CommentList>
        {data.comments.map(comment => (
          <Comment
            key={`${comment.id}_${comment.content}`}
            comment={comment}
            postInfo={postInfo}
            isAdmin={data.isAdmin}
            isOneOfCommentsIsUseful={data.isOneOfCommentsIsUseful}
            mutateFns={mutateFns}
          />
        ))}
      </CommentList>
      {hasNextPage && <ShowMoreButton loading={isFetchingNextPage} onClick={fetchNextPage} />}
    </CommentsContainer>
  );
};

export default CommentSection;
