import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import { Badge, Flex, Group, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { AvatarIcon } from '..';
import { profileByEmailQuery } from '../../queries';
import { convertCountryNameToCode } from '../../utils/countryCode';
import { PROFILE_PATH } from '../../constants/routes';

const ProfileWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  border-radius: 18px;
  border: 1px solid var(--opacity-border-color);
  background-color: var(--opacity-bg-color);
  padding: 20px;
  margin: 40px 0;
  color: var(--font-color);
`;

const AvatarProfileInfoLink = ({ email }) => {
  const {
    data: { nickName, country, avatarId, level, point },
  } = useQuery(profileByEmailQuery(email));

  return (
    <Link to={`${PROFILE_PATH}/${nickName}`}>
      <ProfileWrapper>
        <Flex>
          <Flex m="auto">
            <AvatarIcon avatarId={avatarId} size="lg" />
          </Flex>
          <Flex direction="row" ml="30px" w="100%" justify="space-between">
            <Flex direction="column">
              <Group>
                <ReactCountryFlag
                  countryCode={convertCountryNameToCode(country)}
                  style={{
                    fontSize: '1.8em',
                  }}
                  svg
                />
                <Text fz="1.2rem" fw="500">
                  {nickName}
                </Text>
              </Group>
              <Text fz="1rem" fw="400" color="gray">
                {email}
              </Text>
            </Flex>

            <Flex direction="column" align="flex-end" justify="flex-start" gap="sm">
              <Badge size="md" fz="md" mt="2px">{`L${level}`}</Badge>
              <Text fz="1rem" fw="400" ml="sm">{`${point} 포인트`}</Text>
            </Flex>
          </Flex>
        </Flex>
      </ProfileWrapper>
    </Link>
  );
};
export default AvatarProfileInfoLink;
