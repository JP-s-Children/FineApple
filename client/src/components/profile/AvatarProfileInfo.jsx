import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Divider, Flex, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { AvatarIcon } from '..';
import { profileByNickNameQuery } from '../../queries';

const ProfileWrapper = styled.div`
  width: 100%;
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
  margin: 40px 0;
`;

const Name = styled(Text)`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PointInfo = styled(Text)`
  font-size: 1.1rem;
  font-weight: 300;
  margin-right: 20px;
`;

const ColorDivider = styled(Divider)`
  border-color: var(--body-bg-color);
`;

const AboutMe = styled(Text)`
  background-color: var(--footer-bg-color);
  border-radius: 10px;
  margin-top: -16px;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: justify;
`;

const AvatarProfileInfo = ({ nickName }) => {
  const {
    data: { userInfo },
  } = useQuery(profileByNickNameQuery(nickName));

  const { avatarId, level, point, aboutMe } = userInfo;
  console.log(avatarId);

  return (
    <ProfileWrapper>
      <Flex p="30px">
        <AvatarIcon avatarId={avatarId} size="xl" />
        <Flex direction="column" ml="30px" w="100%">
          <Flex direction="row" align="center" justify="flex-start">
            <Name fs="1.6rem" fw="600">
              {nickName}
            </Name>
          </Flex>
          <Flex direction="row" align="center" justify="flex-start">
            <PointInfo>레벨 {level}</PointInfo>
            <PointInfo>포인트 {point}</PointInfo>
          </Flex>
        </Flex>
      </Flex>

      <ColorDivider size="md" />

      <AboutMe m="20px" align="">
        {aboutMe || '등록된 자기소개가 없습니다.'}
      </AboutMe>
    </ProfileWrapper>
  );
};
export default AvatarProfileInfo;
