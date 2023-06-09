import React from 'react';
import Recoil from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReactCountryFlag from 'react-country-flag';
import styled from '@emotion/styled';
import { Badge, Button, Container, Flex, Grid, Text } from '@mantine/core';
import { AvatarIcon, InterestCategories } from '..';
import formattedDate from '../../utils/formattedDate';
import { MY_PROFILE_EDIT_PATH } from '../../constants/routes';
import { myProfileQuery } from '../../queries';
import userState from '../../recoil/atoms/userState';
import { convertCountryNameToCode } from '../../utils/countryCode';

const Wrapper = styled(Flex)`
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
  display: flex;
  align-items: start;
  width: 100%;
  padding: 30px;
  margin-top: 14px;
`;

const Label = styled(Text)`
  font-size: 1.2rem;
  font-weight: 600;
`;

const GridCol = styled(Grid.Col)`
  text-align: start;
  font-size: 1rem;
  font-weight: 400;
`;

const GridLabel = styled(GridCol)`
  font-weight: 500;
  font-size: 1rem;
`;

const AboutMe = styled.pre`
  background-color: var(--opacity-bg-color);
  border: 1px solid var(--opacity-border-color);
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  font-size: 1rem;
  text-align: start;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 15px;
`;

const MyProfile = () => {
  const navigate = useNavigate();
  const user = Recoil.useRecoilValue(userState);
  const {
    data: {
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
      interestCategories,
    },
  } = useQuery(myProfileQuery(user.email));

  const handleEdit = () => {
    navigate(MY_PROFILE_EDIT_PATH);
  };

  return (
    <Flex>
      <Container align="center" p="30px" miw="250px">
        <AvatarIcon avatarId={avatarId} size="xl" />
        <Text fz="2rem" weight="500">
          {nickName}
        </Text>
        <Flex direction="row" align="center" justify="center" gap="sm">
          <Badge size="md" fz="md" mt="2px">{`L${level}`}</Badge>
          <Text fz="1rem" fw="400">{`${point} 포인트`}</Text>
        </Flex>
        <Button mt="30px" size="sm" radius="10px" onClick={handleEdit}>
          프로필 편집
        </Button>
      </Container>

      <Container mt="26px">
        <Wrapper>
          <Label mb="md">관심 카테고리</Label>
          <InterestCategories interestCategories={interestCategories} />
        </Wrapper>

        <Wrapper>
          <Label>계정 정보</Label>
          <Grid gutter={10} columns={4} grow mt="md">
            <GridLabel span={1}>이메일</GridLabel>
            <GridCol span={3}>{email}</GridCol>

            <GridLabel span={1}>이름</GridLabel>
            <GridCol span={3}>{name}</GridCol>

            <GridLabel span={1}>국가</GridLabel>
            <GridCol span={3}>
              <ReactCountryFlag
                countryCode={convertCountryNameToCode(country)}
                style={{
                  fontSize: '1em',
                  marginRight: '8px',
                }}
                svg
              />
              {country}
            </GridCol>

            <GridLabel span={1}>생년월일</GridLabel>
            <GridCol span={3}>{formattedDate(new Date(birthDate))}</GridCol>

            <GridLabel span={1}>연락처</GridLabel>
            <GridCol span={3}>{phoneNumber}</GridCol>
          </Grid>
        </Wrapper>

        <Wrapper>
          <Label>자기소개</Label>
          <AboutMe>{aboutMe || '등록된 자기소개가 없습니다.'}</AboutMe>
        </Wrapper>
      </Container>
    </Flex>
  );
};

export default MyProfile;
