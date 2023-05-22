import React from 'react';
import { Badge, Flex, Image, Text, Title } from '@mantine/core';
import { PopupModal } from '../../common';
import { HighlightText } from '.';

const filters = ['전체보기', '해결된 질문', '해결되지 않은 질문', '최신순', '오래된 순', '인기순'];

const ContentInfoModal = ({ opened, onClose }) => (
  <PopupModal opened={opened} onClose={onClose} title={`💡 카테고리 질문 목록 한 눈에 살펴보기`}>
    <Text fz="lg" fw="600">
      {`FineApple 커뮤니티에서 제공하는 카테고리 질문 목록을 필터를 활용해 새롭게 정렬하여 볼 수 있습니다.`}
    </Text>
    <Flex direction="column" mt="20px" p="20px" bg="var(--opacity-bg-color)">
      <Title fz="0.9rem">💿 필터 종류</Title>
      <Flex mt="20px" gap="8px">
        {filters.map(filter => (
          <Badge key={filter}>{filter}</Badge>
        ))}
      </Flex>
    </Flex>
    <Text mt="40px">
      {`페이지 상단의`} <HighlightText>질문 검색</HighlightText>
      {` 입력란을 활용하여 페이지의 카테고리와 관련된 글 목록 중 최신 순으로 5개를 필터링하여 찾을 수 있습니다. 5개의 질문 가운데 원하는 질문이 없을 경우 `}
      <HighlightText>입력란</HighlightText>
      {`의 입력값을 상세히 적거나, 우측의 `}
      <HighlightText>질문하기</HighlightText>
      {' 버튼을 클릭하여 새로운 질문을 작성하고 답변을 기다릴 수 있습니다.'}
    </Text>
    <Text mt="20px">
      {`카테고리 별 질문 목록 페이지에서`} <HighlightText>필터 / 정렬</HighlightText>
      {`을 활용하여, 관련 질문들을 `}
      <HighlightText>[해결된 질문 | 해결되지 않은 질문]</HighlightText>
      {' / '}
      <HighlightText>[최신순 | 오래된 순 | 인기순]</HighlightText>
      <Text display="inline">{`으로 필터링 합니다.`}</Text>
      <Text mt="20px">
        {` 필터링을 통해 원하는 질문을 찾고, 해당 질문을 클릭하여 질문의 내용 그리고 다른 회원들의 답변을 확인할 수 있습니다. 또, 랭킹 페이지에서 다른 회원의 이름을 클릭하고 해당 프로필로 이동하면, 해당 사용자가 작성한 글 목록을 확인할 수 있습니다.`}
      </Text>
    </Text>

    <Image maw={380} mx="auto" my="20px" radius="md" src="/community/community-main.png" alt="filterContentImage" />
  </PopupModal>
);

export default ContentInfoModal;
