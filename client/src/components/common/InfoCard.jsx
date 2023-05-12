import React from 'react';
import styled from '@emotion/styled';
import { Stack, Center, Text, Button } from '@mantine/core';
import { RiArrowRightSLine } from 'react-icons/ri';

const Container = styled(Center)`
  text-align: center;
  word-break: keep-all;
`;

const Icon = styled.div`
  color: var(--font-color);
  font-size: 48px;
`;

const RightArrowIcon = styled(RiArrowRightSLine)`
  padding-top: 1px;
  font-size: 21px;
`;

const MoreButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12px;
  border-radius: 20px;
`;

/**
 * icon : 랜더링할 아이콘
 * title : bold체로 표현되는 Text
 * desc : Info 설명
 * onClick : 더 알아보기 클릭 시 Modal 띄우기
 * @param {{icon, title, desc, href}} param0
 * @returns JSX
 */

const InfoCard = ({ icon, title, desc, onClick }) => (
  <Container>
    <Stack align="center">
      <Icon>{icon}</Icon>
      <Text fz="28px" fw="600">
        {title}
      </Text>
      <Text w="60%">{desc}</Text>
      <MoreButton onClick={onClick}>
        <Text>더 알아보기</Text>
        <RightArrowIcon />
      </MoreButton>
    </Stack>
  </Container>
);

export default InfoCard;
