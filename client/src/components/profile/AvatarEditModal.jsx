import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Radio, SimpleGrid, Text } from '@mantine/core';
import PopupModal from '../common/PopupModal';
import avatars from '../../constants/avatars';

const Container = styled.div`
  min-height: 480px;
`;

const List = styled(SimpleGrid)`
  margin: 30px 0;
  justify-items: center;
`;

const RadioInput = styled(Radio)`
  input,
  svg {
    display: none;
  }

  label {
    padding: 0;
  }

  .mantine-Radio-labelWrapper {
    width: 100%;
  }
`;

const RadioAvatar = styled(Avatar)`
  border: ${({ selected }) => (selected ? '5px solid var(--hover-font-color)' : '5px solid #d1d1d1')};
  background-color: ${({ selected }) => (selected ? 'var(--hover-font-color)' : '#d1d1d1')};
  border-radius: 100%;

  :hover {
    cursor: pointer;
    border: 5px solid var(--hover-font-color);
    background-color: var(--hover-font-color);
  }
`;

/**
 * PopupModal - AvatarEditModal
 * @param {{
 * opened: boolean
 * onClose: () => void
 * avatarId?: string
 * }} props
 */
const AvatarEditModal = ({ avatarId, opened, onClose }) => {
  const [selectedId, setSelectedId] = React.useState(avatarId);

  return (
    <PopupModal title="아바타 수정" opened={opened} onClose={onClose}>
      <Container>
        <Text>아바타는 사용자의 활동을 맞춤화하여 목록 및 댓글을 통해 표시됩니다.</Text>

        <List cols={4} verticalSpacing="xl">
          {Object.keys(avatars).map(avatarId => (
            <RadioInput
              key={avatarId}
              value={avatarId}
              onClick={onClose}
              label={
                <RadioAvatar
                  key={avatarId}
                  size="lg"
                  selected={avatarId === selectedId}
                  src={avatars[avatarId]}
                  onClick={() => setSelectedId(avatarId)}
                />
              }
            />
          ))}
        </List>
      </Container>
    </PopupModal>
  );
};

export default AvatarEditModal;
