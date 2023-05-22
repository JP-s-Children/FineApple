import React from 'react';
import { Divider, List, Text } from '@mantine/core';
import { PopupModal } from '../../common';
import { HighlightText } from '../..';

const followingInstructions = [
  `1. [질문 검색] 입력란에 질문을 입력합니다. 질문은 되도록 짧은 문장 하나로 작성합니다.`,
  `2. 유사한 질문 목록을 검토하여 올리려는 질문과 비슷한 것이 있는지 살펴봅니다. 이렇게 하면 새로운 질문을 올리고 다른 회원이 답변해 주기를 기다리지 않고도 답을 찾을 수 있습니다.`,
  `3. 유사한 질문을 찾지 못하면 [질문하기] 버튼을 클릭합니다. FineApple ID로 로그인되어 있는지 확인합니다.`,
  `4. [질문하기] 버튼을 클릭하고 새 게시물을 생성할 수 있습니다. 질문 제목, 제목과 관련된 질문 내용, 주제 선택 등 자세한 내용을 모두 입력하는 것이 좋습니다.`,
  `5. [글쓰기] 버튼을 클릭합니다. 질문이 선택한 주제에 해당하는 커뮤니티에 올라가면 다른 회원이 이를 보고 답글을 작성할 수 있습니다.`,
];

const QuestionInfoModal = ({ opened, onClose }) => (
  <PopupModal opened={opened} onClose={onClose} title="🚀 답변을 찾고 질문하기">
    <Text fz="lg" fw="600">
      FineApple 커뮤니티에서 답변을 검색하거나 새 질문을 올릴 수 있습니다.
    </Text>
    <Text my="20px">
      <HighlightText>질문 검색</HighlightText>
      {` 입력란을 활용하여 답변을 빠르게 찾거나 새로운 질문을 올릴 수 있습니다. 로그인한 상태라면 페이지의 좌측 상단에서 3번째에 있는`}
      <HighlightText>질문하기</HighlightText>
      {`를 클릭하여 질문을 작성할 수 있습니다.`}
    </Text>
    <Divider mt="30px" color="var(--opacity-border-color)" />
    <Text mt="30px" fw="500" fz="lg">
      {`✅ FineApple에서 질문을 하려면 아래의 프로세스를 따릅니다.`}
    </Text>
    <List p="32px" spacing="lg" c="var(--font-color)">
      {followingInstructions.map((instruction, idx) => (
        <List.Item key={idx}>{instruction}</List.Item>
      ))}
    </List>
    <Divider color="var(--opacity-border-color)" />
    <Text mt="20px">
      {`질문 해결에 도움이 된 답변에`} <HighlightText>채택된 답변 </HighlightText>
      {` 표시를 하여 도움을 준 커뮤니티 회원의 노고를 인정해 줍니다. 그러면 해당 회원은 포인트를 지급받아 커뮤니티에서 레벨이 올라갑니다.`}
    </Text>
  </PopupModal>
);

export default QuestionInfoModal;
