import React from 'react';
import { Button, Flex } from '@mantine/core';
import { BiDownArrowAlt } from 'react-icons/bi';

const ShowMoreButton = ({ loading, onClick }) => (
  <Flex justify="center" mt="40px">
    <Button
      loading={loading}
      w={200}
      radius="xl"
      rightIcon={<BiDownArrowAlt size="22" />}
      fz="1rem"
      variant="gradient"
      gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      loaderPosition="right"
      onClick={onClick}>
      더보기
    </Button>
  </Flex>
);

export default ShowMoreButton;
