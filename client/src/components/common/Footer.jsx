import React from 'react';
import styled from '@emotion/styled';
import { Container, Flex, Text, Divider } from '@mantine/core';
import Logo from './Logo';

const FooterContainer = styled.footer`
  min-width: 1280px;
  width: 100vw;
  padding-top: 0.5rem;
  padding-bottom: 1.25rem;
  background-color: var(--footer-bg-color);
  color: var(--footer-font-color);
`;

const Wrapper = styled(Container)`
  min-width: 1280px;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  font-size: 0.75rem;
`;

const footerContents = {
  regulations: ['개인정보 처리방침', '웹 사이트 이용약관', '판매 및 환불', '법적 고지', '사이트 맵'],
  businessInfo: [
    '대표이사 : Cool JP | 주소 : 서울특별시 강남구 역삼동 826-21, 파인애플빌딩',
    '대표전화 : 080-333-8877 | 팩스 : 02-0000-0000',
  ],
};

const Footer = () => {
  const { regulations, businessInfo } = footerContents;

  return (
    <FooterContainer>
      <Container miw="1280px" p="0" h="50px">
        <Logo width={'60px'} height={'60px'} />
      </Container>
      <Divider my="lg" m="0 auto" miw="1280px" color="var(--opacity-border-color)" />
      <Wrapper>
        <Flex justify="center" align="align-items" direction="column">
          {businessInfo.map((info, idx) => (
            <li key={idx}>{info}</li>
          ))}
        </Flex>
      </Wrapper>
      <Container miw="1280px" display="flex" justify="space-between" fz="0.75rem">
        <Text>Copyright © 2023 FineApple Inc. 모든 권리 보유.</Text>
        <Flex gap="1rem" ml="auto">
          {regulations.map((regulation, idx) => (
            <li key={idx}>{regulation}</li>
          ))}
        </Flex>
        <Text ml="auto" fw="500">
          대한민국
        </Text>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
