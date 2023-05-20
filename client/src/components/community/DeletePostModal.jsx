import React from 'react';
import Recoil from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Image, Text } from '@mantine/core';
import { PopupModal } from '../common';
import { MY_POSTS_PATH } from '../../constants/routes';
import useToast from '../../hooks/useToast';
import { removePost } from '../../services/posts';
import userState from '../../recoil/atoms/userState';

const DeletePostModal = ({ postId, opened, onClose }) => {
  const user = Recoil.useRecoilValue(userState);
  const navigate = useNavigate();
  const toast = useToast();

  const handleDeletePostClick = async () => {
    try {
      await removePost({ id: postId, author: user.email });

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
        <Flex justify="end" mt="4rem">
          <Image src={'/community/community-main.png'} alt="modal-image" width="90%" />
        </Flex>
        <Flex justify="center" w="100%" gap="2rem" mt="6rem">
          <Button w={150} h={50} radius="md" fz="1.1rem" onClick={handleDeletePostClick}>
            {`확 인`}
          </Button>
          <Button w={150} h={50} radius="md" fz="1.1rem" color="gray" variant="outline" onClick={onClose}>
            {`취 소`}
          </Button>
        </Flex>
      </Flex>
    </PopupModal>
  );
};

export default DeletePostModal;
