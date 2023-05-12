import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Container } from '@mantine/core';
import avatars from '../../constants/avatars';

const AvatarWrapper = styled(Avatar)`
  background-color: #d1d1d1;
  border: 3px solid #d1d1d1;
  border-radius: 100%;
`;

const Overlay = styled(Container)`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #e0e0e0;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
    :after {
      content: '✎ 편집';
      font-size: 12px;
    }
  }
`;

const AvatarEditButton = ({ avatarId, onClick }) => (
  <Container pos="relative" p="0">
    <AvatarWrapper size="xl" src={avatars[avatarId]} alt="avatar image button" />
    {onClick && <Overlay onClick={onClick} />}
  </Container>
);

export default AvatarEditButton;
