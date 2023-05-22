import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Badge, Flex, Group, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { AvatarIcon, InterestCategories } from '..';
import { convertCountryNameToCode } from '../../utils/countryCode';

const ProfileWrapper = styled(Flex)`
  flex-direction: column;
  width: 1024px;
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
  padding: 24px;
  margin-top: 40px;
`;

const AboutMe = styled.pre`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  font-size: 15px;

  font-size: 1rem;
  text-align: start;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const AvatarProfileInfoDetail = ({ nickName, email, country, aboutMe, interestCategories, avatarId, level, point }) => (
  <ProfileWrapper>
    <Flex>
      <Flex m="auto">
        <AvatarIcon avatarId={avatarId} size="xl" />
      </Flex>
      <Flex direction="row" ml="30px" w="100%" justify="space-between">
        <Flex direction="column">
          <Group>
            <ReactCountryFlag
              countryCode={convertCountryNameToCode(country)}
              style={{
                fontSize: '2em',
              }}
              svg
            />
            <Text fz="1.6rem" fw="600">
              {nickName}
            </Text>
          </Group>
          <Text fz="1rem" fw="400" color="gray" mb="20px">
            {email}
          </Text>

          <InterestCategories interestCategories={interestCategories} />
        </Flex>

        <Flex direction="column" align="flex-end" justify="flex-start" gap="sm">
          <Badge size="md" fz="md" mt="2px">{`L${level}`}</Badge>
          <Text fz="1rem" fw="400" ml="sm">{`${point} 포인트`}</Text>
        </Flex>
      </Flex>
    </Flex>

    <AboutMe>{aboutMe || '등록된 자기소개가 없습니다.'}</AboutMe>
  </ProfileWrapper>
);

export default AvatarProfileInfoDetail;
