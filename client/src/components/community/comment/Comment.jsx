import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Badge, Box, Button, CloseButton, Divider, Flex, Group, List, Text } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { AvatarIcon, AppleRecommendIcon, TextEditor, UsefulCommentChip, AppleRecommendButton } from '../..';
import { PROFILE_PATH } from '../../../routes/routePaths';
import formattedDate from '../../../utils/formattedDate';
import transientOptions from '../../../utils/transientOptions';
import useTextEditor from '../../../hooks/useTextEditor';
import userState from '../../../recoil/atoms/userState';

const Container = styled(List.Item)`
  .mantine-List-itemWrapper {
    min-width: 990px;
  }

  span > div {
    border: '1px solid #e1e1e1';
    box-shadow: ${({ isMine }) => isMine && 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'};
  }
`;

const CommentHeader = styled(Flex, transientOptions)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 3px 0 4px 20px;
  font-weight: 500;
  border-bottom: 1px solid var(--body-bg-color);
  border-radius: 10px 10px 0 0;
  background: ${({ $certified }) => ($certified ? '#238BE680' : 'var(--secondary-bg-color)')};
`;

const CommentWrapper = styled(Flex)`
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;

const CommentBody = styled.div`
  min-width: 500px;
  display: flex;
  gap: 20px;
  padding: 1.5rem;
`;

const CommentNickName = styled(Text)`
  margin: 2.5px 0 0 2px;
  font-size: 21px;
  font-weight: 500;
  color: var(--font-color);
  &:hover {
    text-decoration: underline;
  }
`;

const CommentLevelBadge = styled(Badge)`
  margin-top: 4px;
  padding: 0 8px;
  font-size: 14px;
  border: 1px solid var(--font-color);
  color: var(--font-color);
`;

const CommentContent = styled(Text)`
  margin-top: 16px;
  color: var(--font-color);
  font-size: 1rem;
  text-align: justify;
  word-break: keep-all;
`;

const UsefulBadge = styled(Group)`
  gap: 6px;
  padding: 2px 12px;
  height: 32px;
  border: 1px solid #58be7d;
  border-radius: 30px;
  color: #58be7d;
  font-size: 14px;
  font-weight: 600;
`;

const Comment = ({
  comment,
  postInfo,
  isAdmin,
  isOneOfCommentsIsUseful,
  mutateFns: { editMutate, toggleUsefulMutate, toggleCertifiedMutate, removeMutate },
}) => {
  const { id, author, avatarId, certified, content, createAt, level, nickName, useful } = comment;
  const user = useRecoilValue(userState);

  const isAuthor = author === user?.email;

  const [commentEditable, setCommentEditable] = React.useState(false);

  const editor = useTextEditor({
    initContent: content,
    placeholder: '의견을 알려주세요.',
  });

  const handleClickCertified = (commentId, certified) => () => toggleCertifiedMutate({ commentId, certified });

  return (
    <Container>
      <CommentWrapper>
        <CommentHeader $certified={certified}>
          {certified && <AppleRecommendIcon color="white" />}
          {isAuthor && (
            <CloseButton
              title="Close popover"
              ml="auto"
              mr="6px"
              size="md"
              variant="transparent"
              iconSize={20}
              c="var(--font-color)"
              onClick={() => removeMutate({ commentId: id, certified, useful })}
            />
          )}
        </CommentHeader>
        <CommentBody>
          <Link to={`${PROFILE_PATH}/${nickName}`}>
            <AvatarIcon avatarId={avatarId} />
          </Link>
          <Flex direction="column" w="100%">
            <Flex gap="10px">
              <Link to={`${PROFILE_PATH}/${nickName}`}>
                <Flex gap="10px" align="center">
                  <CommentNickName>{nickName}</CommentNickName>
                  <CommentLevelBadge variant="outline">{`L${level}`}</CommentLevelBadge>
                </Flex>
              </Link>

              <Flex ml="auto" gap="10px">
                {isAdmin && !postInfo.certified && !certified && (
                  <AppleRecommendButton onClick={handleClickCertified(id, true)} />
                )}
                {isAdmin && postInfo.certified && certified && (
                  <Button h="32px" radius="xl" color="red" onClick={handleClickCertified(id, false)}>
                    권장 답변 취소
                  </Button>
                )}

                {postInfo.author === user?.email ? (
                  <UsefulCommentChip
                    commentId={id}
                    useful={useful}
                    isOneOfCommentsIsUseful={isOneOfCommentsIsUseful}
                    toggleUsefulMutate={toggleUsefulMutate}
                  />
                ) : (
                  useful && (
                    <UsefulBadge>
                      <AiFillCheckCircle pos="absolute" top="0" size="16" />
                      <Text>유용함</Text>
                    </UsefulBadge>
                  )
                )}

                {isAuthor && (
                  <Button
                    mb="4px"
                    h="32px"
                    color={commentEditable ? 'red' : 'blue'}
                    radius="xl"
                    onClick={() => {
                      setCommentEditable(!commentEditable);
                      editor.commands.focus('end');
                    }}>
                    {commentEditable ? '편집 취소' : '답글 편집'}
                  </Button>
                )}
              </Flex>
            </Flex>
            <Text mb="10px" c="grey">
              {formattedDate(new Date(createAt))}
            </Text>
            <Divider variant="dashed" />
            {commentEditable ? (
              <Box mt="20px">
                <TextEditor editor={editor} />
                <Flex justify="end" mt="20px" gap="10px">
                  <Button
                    h="32px"
                    radius="xl"
                    onClick={() => {
                      editMutate({ commentId: id, commentInfo: { content: editor.getHTML() } });
                      setCommentEditable(false);
                    }}>
                    편집 완료
                  </Button>
                </Flex>
              </Box>
            ) : (
              <CommentContent>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </CommentContent>
            )}
          </Flex>
        </CommentBody>
      </CommentWrapper>
    </Container>
  );
};

export default Comment;
