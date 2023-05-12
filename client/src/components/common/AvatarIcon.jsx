import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mantine/core';
import avatars from '../../constants/avatars';

const Container = styled(Avatar)`
  background-color: #d1d1d1;
  border: 3px solid #d1d1d1;
  border-radius: 100%;
`;

/**
 * - avatarId 목록 : /constants/avatars
 * @param {{avatarId?: string}} param
 */
const AvatarIcon = ({ avatarId, size = 'md' }) => (
  <Container src={avatarId ? avatars[avatarId] : null} size={size} alt="avatar image" />
);

export default AvatarIcon;
