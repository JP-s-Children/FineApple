import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { Faq } from '../components';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  text-align: center;
  color: var(--font-color);
`;

const GuideFaq = () => {
  const faqList = [
    {
      title: '[검색] FineApple에서 질문 검색은 어떻게 하나요?',
      content: [
        `🔎  fineapple.com 메인 페이지에서 좌측의 원하는 카테고리를 선택하고, 궁금한 질문을 입력하세요. 원하는 질문이 없다면, 로그인 후에 질문하기 페이지로 이동하여, 질문을 작성해 주세요!`,
      ],
    },
    {
      title: '[검색] 질문 검색 입력란에 타이핑을 하면, 어떤 기준으로 질문 목록을 보여주나요?',
      content: [
        `🔎 FineApple 데이터 베이스로부터 사용자들이 입력한 질문 제목에 있는 단어들을 필터링하여, 입력값과 비교 후 관련된 질문들을 보여줍니다. 단, 최신 순으로 정렬된 최상위 5개의 질문을 보여줍니다!`,
      ],
    },
    {
      title: '[질문하기] 질문하기는 어떻게 하나요?',
      content: [
        `👆 메인 페이지에서  상단의 질문하기 링크를 클릭하여 질문하기 페이지로 이동 후, 질문의 [ 제목 | 관련 내용 및 이미지 | 주제 ]를 선택하고 글쓰기 버튼을 클릭하여 질문을 작성할 수 있습니다.`,
        `✌️ [ 컴퓨터 / IT ] 또는 [ 게임 ] 대분류 카테고리 페이지로 이동합니다. 그리고 카테고리 관련 질문 중 내가 원하는 질문이 없을 경우, [질문 검색] 입력란 우측의 [질문하기] 버튼을 클릭하여 질문하기 페이지로 이동하여 질문을 작성하세요!`,
        `🫰 대분류 내 소분류 카테고리 페이지로 이동하여, 2번과 같은 과정을 거치면 됩니다.`,
      ],
    },
    {
      title: '[답글] 답글은 어떻게 작성하나요?',
      content: [
        `⌨ 답변을 원하는 질문의 페이지로 이동하면, 질문 페이지 내용의 하단에 답글을 작성할 수 있는 [ 텍스트 에디터 ]가 준비되어 있습니다. 단순한 텍스트 입력뿐만 아니라, [ 볼드체 / 이탤릭체 | 밑줄 긋기 | 컬러 하이라이팅 | 링크 붙이기 ] 등의 스타일 작업 후에 답글을 올릴 수 있습니다. 업로드한 답글은 답글 목록의 최상단으로 배치됩니다!`,
      ],
    },
    {
      title: '[답글] 채택된 답변으로 선정되는 기준은 무엇인가요?',
      content: [
        `⌨️ 로그인한 사용자와 해당 질문의 사용자가 같은 경우, 답글에 [ 채택 ]이라는 버튼이 활성화 됩니다. [ 채택 ] 버튼을 클릭한 경우, [ 텍스트 에디터 ]의 상단에 채택된 답변이 표시됩니다. 만약, 채택된 답변을 해제하고 싶은 경우 [ 채택 취소 ] 버튼을 클릭합니다.`,
      ],
    },
    {
      title: '[랭킹] 사용자 순위는 어떻게 결정되나요?',
      content: [
        `👑 사용자 순위는 질문을 작성하거나, 질문에 답글 작성 후 질문 작성자가 채택 답변으로 선정한 경우 포인트를 획득할 수 있습니다. 이 포인트들을 합산하여, 사용자의 레벨 고려 후 순위를 정렬 합니다. 추가적으로 메인 페이지의 포인트, 레벨 획득하기의 내용을 참고하셔도 좋습니다.`,
      ],
    },
  ];

  return (
    <Wrapper>
      <Title size="52px" mt="40px" mb="40px">
        자주 묻는 질문 - FAQ
      </Title>
      <Faq faqList={faqList} />
    </Wrapper>
  );
};

export default GuideFaq;
