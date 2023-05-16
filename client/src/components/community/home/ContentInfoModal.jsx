import React from 'react';
import { Image, Text } from '@mantine/core';
import { PopupModal } from '../../common';

const FilterContentModal = ({ opened, onClose }) => (
  <PopupModal opened={opened} onClose={onClose} title={'💡 콘텐츠 한 눈에 살펴보기'}>
    <Text fz="lg" fw="600">
      {'FineApple 지원 커뮤니티에서 팔로우하는 스레드, 사용자 및 커뮤니티에 대한 보기를 관리하고 간소화할 수 있습니다.'}
    </Text>
    <Text mt="20px">
      {
        '향상된 필터링 옵션을 사용하여 알림 콘텐츠를 커뮤니티 또는 카테고리 별로 관리할 수 있습니다. 스레드를 필터링하여 원하는 답변을 찾거나, 관심 있는 새 스레드를 탐색하거나, 여전히 도움이 필요한 다른 회원의 질문을 찾을 수 있습니다. FineApple 지원 커뮤니티에 로그인한 상태라면 프로파일 또는 오른쪽 상단 모서리의 탐색 막대에서 알림 보기에 접근할 수 있습니다.'
      }
    </Text>
    <Text mt="20px">
      {`다른 회원의 프로파일을 보면 알림 탭에서 이들이 팔로우하는 질문, 회원 및 커뮤니티를 확인할 수 있습니다. 다른 회원이 커뮤니티에서 콘텐츠를 공유할 때마다 항상 확인하려는 경우 '팔로우'를 클릭하면 해당 회원의 게시물이 알림 보기에 나타납니다.`}
    </Text>
    <Image
      maw={500}
      mx="auto"
      my="40px"
      radius="md"
      src="/community/filter-content-modal.png"
      alt="filterContentImage"
    />
  </PopupModal>
);

export default FilterContentModal;
