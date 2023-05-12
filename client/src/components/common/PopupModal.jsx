import React from 'react';
import styled from '@emotion/styled';
import { Modal } from '@mantine/core';

const ModalContainer = styled(Modal)`
  position: relative;
  word-break: keep-all;

  section {
    height: 820px;
    background-color: var(--body-bg-color);
  }

  .mantine-Modal-header,
  .mantine-Modal-body {
    color: var(--font-color);
    background-color: var(--body-bg-color);
  }

  button.mantine-Modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e8e8ed;
  }

  button.mantine-Modal-close:hover {
    border: 1px solid #6e6e73;
  }

  h2.mantine-Modal-title {
    width: 650px;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #6e6e73;
  }
`;

/**
 * 1. `const [opened, { open, close }] = useDisclosure(false);`
 * 2. `Modal`을 open할 button 요소에 `open` 함수를 `onClick` 이벤트 핸들러에 전달
 * - `opened` :  Mantine의 `useDisclosure` hook이 반환하는 property
 * - `close` : Mantine의 `useDisclosure` hook이 반환하는 property
 * - `title` : Modal을 활용할 상위 컴포넌트에서 전달받을 `Title Component`
 * @param {{
 * opened: boolean
 * onClose: () => void
 * title: string | undefined
 * children: React.ReactElement
 * }} props
 */

const PopupModal = ({ opened, onClose, title, children }) => (
  <ModalContainer
    opened={opened}
    onClose={onClose}
    title={title}
    padding="60px 60px 40px 60px"
    radius="18px"
    size="50%"
    overlayProps={{
      opacity: 0.55,
      blur: 1,
    }}
    centered>
    {children}
  </ModalContainer>
);

export default PopupModal;
