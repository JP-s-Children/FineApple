import React from 'react';
import Recoil from 'recoil';
import styled from '@emotion/styled';
import { useDisclosure } from '@mantine/hooks';
import { Box, Button, Flex, Skeleton, Text, Title } from '@mantine/core';
import formattedDate from '../../utils/formattedDate';
import { AvatarProfileInfoLink, CompletedIcon, DeletePostModal, LikeChip } from '..';
import userState from '../../recoil/atoms/userState';
import { useTogglePostLike } from '../../hooks/mutations';

const PostSection = styled.section`
  margin-top: 2.5rem;
`;

const PostTitle = styled(Title)`
  font-size: 2.5rem;
  word-break: keep-all;
`;

const Content = styled(Text)`
  margin: 2rem auto;
  width: 90%;
  font-size: 18px;
  line-height: 2rem;
  text-align: justify;
  word-break: keep-all;
`;

const PostContent = ({ post: { id, author, title, createAt, content, completed, like } }) => {
  const user = Recoil.useRecoilValue(userState);
  const [opened, { close: closeModal, open: openModal }] = useDisclosure(false);
  const toggleLikeMutate = useTogglePostLike({ postId: id });

  return (
    <>
      <PostSection>
        <Flex justify="space-between" w="100%" mb="1rem">
          <Flex gap="1rem" mt="0.2rem" mb="0.5rem" h="30px">
            <CompletedIcon completed={completed} />
          </Flex>
          {author === user?.email && (
            <Button radius="xl" color="red" variant="outline" onClick={openModal}>
              질문 삭제하기
            </Button>
          )}
        </Flex>

        <PostTitle>{title}</PostTitle>

        <Text mt="0.5rem" ml="0.2rem" fz="15px" c="grey">
          {formattedDate(new Date(createAt))}
        </Text>

        <React.Suspense fallback={<Skeleton width="100%" height={200} my="40px" />}>
          <AvatarProfileInfoLink email={author} />
        </React.Suspense>

        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
      </PostSection>
      <Box my="lg" sx={{ alignSelf: 'flex-end' }}>
        <LikeChip
          checked={like.includes(user?.email)}
          likeCount={like.length}
          onClick={() => {
            if (!user) return;

            toggleLikeMutate({ checked: !like.includes(user.email), email: user.email });
          }}
        />
      </Box>
      <DeletePostModal postId={id} opened={opened} onClose={closeModal} />
    </>
  );
};

export default PostContent;
