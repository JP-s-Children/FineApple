import React from 'react';
import { Divider, List, Text } from '@mantine/core';
import { PopupModal } from '../../common';

const QuestionInfoModal = ({ opened, onClose }) => {
  const followingInstructions = [
    `1. '검색 또는 질문하기' 입력란에 질문을 입력합니다. 질문은 되도록 짧은 문장 하나로 작성합니다. 추가 정보는 이후의 몇 단계에서 입력할 수 있습니다.`,
    `2. '유사한 질문 목록을 검토하여 올리려는 질문과 비슷한 것이 있는지 살펴봅니다. 이렇게 하면 새로운 질문을 올리고 다른 회원이 답변해 주기를 기다리지 않고도 답을 찾을 수 있습니다.`,
    `3. '유사한 질문을 찾지 못하면 '커뮤니티에 질문하기'를 클릭합니다. Apple ID로 로그인되어 있는지 확인합니다.`,
    `4. 다음 페이지에서 새 게시물을 생성할 수 있습니다. 제품 사양, 소프트웨어 버전 정보, 문제를 일으키는 동작, 이미 수행한 문제 해결 방법 등 자세한 내용을 모두 입력하는 것이 좋습니다.`,
    `5. 질문에 언급된 기기를 선택하고 주제를 선택합니다.`,
    `6. '글쓰기'를 클릭합니다. 질문이 선택한 주제에 해당하는 커뮤니티에 올라가면 다른 회원이 이를 보고 답변할 수 있습니다.`,
  ];

  return (
    <PopupModal opened={opened} onClose={onClose} title="🚀 답변을 찾고 질문하기">
      <Text fz="lg" fw="600">
        FineApple 지원 커뮤니티에서 답변을 검색하거나 새 질문을 올릴 수 있습니다.
      </Text>
      <Text my="20px">
        {`'검색 또는 질문하기' 입력란을 활용하여 답변을 빠르게 찾거나 새로운 질문을 올릴 수 있습니다. 로그인한 상태라면 페이지의 오른쪽 상단 모서리에 있는 '글쓰기'를 클릭하여 새 질문을 할 수 있습니다.`}
      </Text>
      <Divider mt="30px" />
      <Text mt="30px" fw="500" fz="lg">
        홈페이지에서 질문을 하려면 다음을 따릅니다.
      </Text>
      <List p="32px" spacing="lg" c="var(--font-color)">
        {followingInstructions.map((instruction, idx) => (
          <List.Item key={idx}>{instruction}</List.Item>
        ))}
      </List>
      <Divider />
      <Text mt="20px">
        {`답변을 쉽게 추적할 수 있도록 자신이 올린 질문 또는 답변한 질문에 대한 이메일 알림에 자동으로 구독됩니다. 이메일 알림을 설정하려면 프로파일 및 환경설정 편집으로 이동합니다.`}
      </Text>
      <Text mt="20px">
        {`질문 해결에 도움이 된 답변에 표시를 하여 도움을 준 커뮤니티 회원의 노고를 인정해 줍니다. 그러면 해당 회원은 명성 포인트를 지급받아 커뮤니티에서 레벨이 올라갑니다. 또한 다른 회원이 유용한 답변을 편하게 찾을 수도 있습니다.`}
      </Text>
    </PopupModal>
  );
};

export default QuestionInfoModal;
