import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mantine/core';
import avatars from '../../constants/avatars';
import transientOptions from '../../constants/transientOptions';

const Container = styled(Avatar, transientOptions)`
  background-color: var(--opacity-border-color);
  border: 3px solid var(--opacity-border-color);
  border-radius: 100%;

  :hover {
    border: ${({ $activeHoverStyle }) => $activeHoverStyle && '3px solid var(--hover-font-color)'};
  }
`;

/**
 * - avatarId 목록 : /constants/avatars
 * @param {{avatarId?: string, size: 'sm' | 'md' | 'lg', activeHoverStyle: boolean}} param
 */
const AvatarIcon = ({ avatarId, size = 'md', activeHoverStyle = false }) => (
  <Container
    src={avatarId ? avatars[avatarId] : null}
    size={size}
    alt="avatar image"
    $activeHoverStyle={activeHoverStyle}
  />
);

export default AvatarIcon;
