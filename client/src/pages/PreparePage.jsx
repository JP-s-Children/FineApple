import React from 'react';
import styled from '@emotion/styled';
import { Button, Container, Flex, Text } from '@mantine/core';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { MAIN_PATH } from '../routes/routePaths';

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

const PreparePage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Flex direction="column" align="center">
        <Flex align="center" mt="8rem" mb="2rem"></Flex>
        <Text mb="2rem" fz="1.5rem" fw="600" ta="center" c="var(--font-color)">
          💿 현재 페이지는 준비중입니다.
        </Text>
        <Button
          w={240}
          size="md"
          radius="xl"
          fz="16px"
          color="green"
          rightIcon={<BsArrowRightCircleFill size="18" />}
          onClick={() => navigate(MAIN_PATH)}>
          커뮤니티로 가기
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default PreparePage;
