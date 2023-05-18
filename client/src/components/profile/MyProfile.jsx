import React from 'react';
import Recoil from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { Button, Divider, Flex, Grid, Text } from '@mantine/core';
import { AvatarIcon } from '..';
import formattedDate from '../../utils/formattedDate';
import { MY_PROFILE_EDIT_PATH } from '../../constants/routes';
import { myProfileQuery } from '../../queries';
import userState from '../../recoil/atoms/userState';

const ProfileWrapper = styled.div`
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
`;

const ColorDivider = styled(Divider)`
  border-color: var(--body-bg-color);
`;

const Name = styled(Text)`
  font-size: 1.4rem;
  font-weight: 600;
`;

const PointInfo = styled(Text)`
  font-size: 1.1rem;
  font-weight: 300;
  margin-right: 20px;
`;

const GridCol = styled(Grid.Col)`
  text-align: start;
  font-size: 1.1rem;
  font-weight: 400;
`;

const GridLabel = styled(GridCol)`
  font-weight: 500;
  font-size: 1.2rem;
`;

const AboutMe = styled(Text)`
  background-color: var(--footer-bg-color);
  border-radius: 10px;
  margin-top: -16px;
  padding: 20px;
`;

const MyProfile = () => {
  const navigate = useNavigate();
  const loginUser = Recoil.useRecoilValue(userState);
  const { data: userInfo } = useQuery(myProfileQuery(loginUser.email));

  const {
    email,
    nickName,
    avatarId,
    name,
    country,
    phoneNumber,
    point,
    level,
    aboutMe,
    birthDate,
    interestedCategory,
  } = userInfo;

  const handleEdit = () => {
    navigate(MY_PROFILE_EDIT_PATH);
  };

  return (
    <ProfileWrapper>
      <Flex p="30px">
        <AvatarIcon avatarId={avatarId} size="xl" />

        <Flex direction="column" ml="30px" w="100%">
          <Flex direction="row" align="center" justify="flex-start">
            <Name>{nickName}</Name>
            <Name fw="400" ml="10px">{`(${name})`}</Name>
          </Flex>
          <Flex>
            <PointInfo>레벨 {level}</PointInfo>
            <PointInfo>포인트 {point}</PointInfo>
          </Flex>

          <Button compact radius="10px" mt="5px" w="fit-content" onClick={handleEdit}>
            프로필 편집
          </Button>
        </Flex>
      </Flex>

      <ColorDivider size="md" />

      {/* TODO: 관심 카테고리 칩 목록 */}
      <Flex w="100%">관심 카테고리 {interestedCategory}</Flex>

      <ColorDivider size="md" />
      <Grid gutter={30} columns={4} m="50px" grow>
        <GridLabel span={1}>이메일</GridLabel>
        <GridCol span={3}>{email}</GridCol>

        <GridLabel span={1}>국가</GridLabel>
        <GridCol span={3}>{country}</GridCol>

        <GridLabel span={1}>생년월일</GridLabel>
        <GridCol span={3}>{formattedDate(new Date(birthDate))}</GridCol>

        <GridLabel span={1}>연락처</GridLabel>
        <GridCol span={3}>{phoneNumber}</GridCol>

        <GridLabel span={4}>자기소개</GridLabel>
        <GridCol span={4}>
          <AboutMe>{aboutMe || '등록된 자기소개가 없습니다.'}</AboutMe>
        </GridCol>
      </Grid>
    </ProfileWrapper>
  );
};

export default MyProfile;
