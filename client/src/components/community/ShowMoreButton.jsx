import React from 'react';
import { Button, Flex } from '@mantine/core';
import { BiDownArrowAlt } from 'react-icons/bi';

const ShowMoreButton = ({ loading, onClick }) => (
  <Flex justify="center" mt="40px">
    <Button
      loading={loading}
      w={200}
      size="lg"
      radius="10px"
      rightIcon={<BiDownArrowAlt size="22" />}
      fz="1rem"
      variant="gradient"
      gradient={{ from: '#5b3bff', to: '#00b7d7', deg: 35 }}
      loaderPosition="right"
      onClick={onClick}>
      더보기
    </Button>
  </Flex>
);

export default ShowMoreButton;
