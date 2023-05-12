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

const CommunityFaq = () => {
  const faqList = [
    {
      title: 'SIM이 없는 iPhone은 왜 fineapple.com에서 구입하는 게 좋은가요?',
      content: `fineapple.com에서 구입하신 미개통 iPhone은 언락 기기입니다. 어느 한 이동통신사와 약정도, 다년간의 서비스 계약도 맺지 않은 상태의 기기라는 뜻이죠. 그래서 당신에게 알맞은 네트워크 및 요금제를 직접 선택할 수 있습니다. 새 iPhone은 활성화 후에도 여전히 언락 기기이기 때문에 iPhone용 서비스를 제공하는 어느 이동통신사에서든 개통할 수 있습니다.`,
    },
    {
      title: '새 기기로 자료를 전송하거나 새로운 iPhone을 설정하는 일은 쉬운가요?',
      content: `네, 그렇습니다. iCloud는 당신의 새로운 기기에 기존 설정, 사진, 앱, 문서 등을 아주 매끄럽게 옮겨줍니다. 새 기기 설정 시 iCloud에 로그인한 다음, 쓰던 기기의 iCloud 백업 파일을 열면 옮길 준비가 금세 끝나죠.
        
        백업에 이용할 iCloud 저장 용량이 부족하신가요? iCloud 저장 공간을 필요한 만큼 임시로 사용할 수 있으니 걱정 마세요. 기기를 백업해서 모든 데이터를 문제 없이 옮길 수 있습니다. 무료로 말이죠(iOS 15 필요).
        
        '빠른 시작' 기능을 이용하면 iCloud에 백업해 둔 기존의 데이터 및 콘텐츠를 새 iPhone에 복원할 수 있습니다. iOS 12.4 이후 버전이 설치된 폰에서는 '빠른 시작' 기능이 기기 간 마이그레이션도 지원합니다. 덕분에 모든 데이터를 쓰던 기기에서 새 기기로 무선으로 편하게 옮길 수 있죠.
        
        안드로이드에서 갈아탄 사용자라면 먼저 'iOS로 이동' 앱을 다운로드한 다음, 새 iPhone 화면에 나타난 설정 프로세스에 따라 진행하면 됩니다.`,
    },
    {
      title: '국내에서 개통한 iPhone을 해외 네트워크에서도 사용할 수 있나요?',
      content: `모든 iPhone 모델은 전 세계적으로 거의 어디에서나 사용 가능합니다. GSM 혹은 CDMA 네트워크 가입 고객에 상관없이, 전 세계 200개 이상의 국가 또는 지역에서 GSM 네트워크를 통해 국제 로밍이 가능합니다. 이동통신사를 통해 iPhone을 할부로 구입한 경우에는 해당 이동통신사에 문의해 국제 로밍이 가능한지 확인하십시오.

        5G 및 LTE 데이터 지원 여부는 국가 또는 지역에 따라 달라지며, 특정 5G 및 LTE 무선 주파수에 대한 이동통신사 지원에 따라서도 달라집니다. 국제 로밍 정책 및 요금에 관한 자세한 내용은 이동통신사에 문의하십시오.`,
    },
    {
      title: '5G 서비스를 제공하는 무선 이동통신사는 어디인가요?',
      content: `iPhone 14, iPhone 14 Plus, iPhone 14 Pro, iPhone 14 Pro Max, iPhone 13 Pro, iPhone 13 Pro Max, iPhone 13, iPhone 13 mini, iPhone 12, iPhone 12 mini는 5G를 지원합니다. 5G 네트워크 사용을 위해서는 5G 서비스를 제공하는 이동통신사를 통해 iPhone을 개통해야 합니다. 일부 이동통신사의 경우 5G 요금제 가입 또는 새 SIM 장착을 요구할 수 있습니다. 자세한 내용은 가입하신 이동통신사에 문의하십시오. 귀하가 현재 거주 중인 국가의 이동통신사에 대한 자세한 내용은 여기를 참고하십시오.`,
    },
    {
      title: '배송 옵션에는 어떤 것이 있으며, 제품은 언제 받아볼 수 있나요?',
      content: `예상 배송 날짜는 제품 재고 및 선택한 배송 옵션을 바탕으로 계산됩니다. 주문한 후에 최종 배송 날짜를 알려드립니다.

        재고가 있는 제품에 한해 익일 무료 배송을 받을 수 있고, 모든 주문에는 일반 무료 배송이 제공됩니다.
        
        지역에 따라 FineApple Store 픽업 옵션도 지원될 수 있습니다. 결제 시, 가까운 FineApple Store에서 제품을 픽업하겠다는 옵션을 선택하면 됩니다.`,
    },
  ];

  return (
    <Wrapper>
      <Title size="52px" mt="24px" mb="40px">
        자주 묻는 질문
      </Title>
      <Faq faqList={faqList} />
    </Wrapper>
  );
};

export default CommunityFaq;
