import React from 'react';
import styled from '@emotion/styled';
import { Button, Container, Flex, Text } from '@mantine/core';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import useGoBack from '../hooks/useGoBack';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  height: 100vh;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const NotFound = () => {
  const goBack = useGoBack();

  return (
    <Wrapper>
      <Flex direction="column" align="center">
        <Flex align="center" mt="8rem" mb="2rem"></Flex>
        <Text mb="3rem" fz="1.5rem" fw="600" ta="center" c="var(--font-color)">
          요청하신 페이지를 찾을 수 없습니다. <br />
          입력하신 주소가 정확한 지 다시 한 번 확인해 주세요.
        </Text>
        <Button w={240} size="md" radius="xl" fz="16px" leftIcon={<BsArrowLeftCircleFill size="18" />} onClick={goBack}>
          이전 페이지로 돌아가기
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default NotFound;
