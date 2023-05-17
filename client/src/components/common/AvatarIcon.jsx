import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mantine/core';
import avatars from '../../constants/avatars';

const Container = styled(Avatar)`
  background-color: var(--opacity-border-color);
  border: 3px solid var(--opacity-border-color);
  border-radius: 100%;

  :hover {
    border: 3px solid var(--hover-font-color);
  }
`;

/**
 * - avatarId 목록 : /constants/avatars
 * @param {{avatarId?: string}} param
 */
const AvatarIcon = ({ avatarId, size = 'md' }) => (
  <Container src={avatarId ? avatars[avatarId] : null} size={size} alt="avatar image" />
);

export default AvatarIcon;
