import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, Divider, Flex, Grid, Text } from '@mantine/core';
import { AvatarIcon } from '..';
import formattedDate from '../../utils/formattedDate';
import { PROFILE_EDIT_PATH } from '../../routes/routePaths';

const Container = styled.div`
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

const Wrapper = styled.div`
  max-width: 1024px;
  width: 1024px;
`;

const ProfileWrapper = styled.div`
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
`;

const ColorDivider = styled(Divider)`
  border-color: var(--body-bg-color);
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

const GridCol = styled(Grid.Col)`
  text-align: start;
  font-size: 1.2rem;
  font-weight: 400;
`;

const GridLabel = styled(GridCol)`
  font-weight: 600;
  font-size: 1.4rem;
`;

const AboutMe = styled(Text)`
  background-color: var(--footer-bg-color);
  border-radius: 10px;
  margin-top: -16px;
  padding: 20px;
`;

const Profile = ({ email, nickName, avatarId, name, country, phoneNumber, point, level, aboutMe, birthDate }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(PROFILE_EDIT_PATH);
  };

  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default Profile;
