import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Image, Text } from '@mantine/core';
import { PopupModal } from '../common';
import { MY_POSTS_PATH } from '../../routes/routePaths';
import useToast from '../../hooks/useToast';
import { removePost } from '../../../firebase/posts';

const DeletePostModal = ({ postId, opened, onClose }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleDeletePostClick = async () => {
    try {
      await removePost(postId);

      toast.success({ message: '게시물이 정상적으로 삭제되었습니다.' });
      navigate(MY_POSTS_PATH);
    } catch (e) {
      toast.error({ message: '게시물 삭제에 실패하였습니다. 잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <PopupModal opened={opened} onClose={onClose} title={''}>
      <Flex direction="column" justify="center" align="center">
        <Text mt="3rem" fz="3rem" fw="700" ta="center">
          {'질문을 정말 삭제하시겠습니까?'}
        </Text>
        <Flex justify="end" mt="3rem">
          <Image src={'/community/filter-content-modal.png'} alt="modal-image" width="90%" />
        </Flex>
        <Flex justify="center" w="100%" gap="3rem" mt="4rem">
          <Button
            w={120}
            radius="xl"
            fz="1.1rem"
            color="var(--font-color)"
            variant="outline"
            onClick={handleDeletePostClick}>
            {`확 인`}
          </Button>
          <Button w={120} radius="xl" fz="1.1rem" color="red" variant="outline" onClick={onClose}>
            {`취 소`}
          </Button>
        </Flex>
      </Flex>
    </PopupModal>
  );
};

export default DeletePostModal;
