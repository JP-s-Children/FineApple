import React from 'react';
import styled from '@emotion/styled';
import { Center, CloseButton } from '@mantine/core';
import { keyframes } from '@emotion/react';
import useToast from '../../hooks/useToast';

const entryTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const entryBottom = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    opacity : 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity : 1;
  }
`;

const dismissTop = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity : 1;
  }
  to {
    transform: translate3d(0, -100%, 0);
    opacity : 0;
  }
`;

const dismissBottom = keyframes`
  from {
    transform: translate3d(0, 0, 0);
     opacity : 1;
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity : 0;
  }
`;

const animation = {
  top: {
    entry: entryTop,
    dismiss: dismissTop,
  },

  bottom: {
    entry: entryBottom,
    dismiss: dismissBottom,
  },
};

const bgc = {
  success: '#339af0',
  error: '#ff6b6b',
};

const Container = styled.div`
  position: fixed;
  top: ${({ position }) => position === 'top' && '0'};
  bottom: ${({ position }) => position === 'bottom' && '0'};
  width: 100%;
  height: ${({ h }) => h};
  padding: 12px 12px;
  background-color: ${({ bgc }) => bgc};
  color: #fff;

  animation: ${({ position, status }) => animation[position][status]} 0.5s both;
  z-index: 9999;

  button {
    color: #fff;
  }
`;

const ToastCloseButton = styled(CloseButton)`
  position: absolute;
  align-self: start;
`;

/**
 * h : toast의 height값 / string
 * c : toast 폰트 컬러 / string
 * bgc : toast 배경 컬러 / string
 *
 * position : toast가 등장할 위치  / 'top' | 'bottom'
 * closeOnClick : toast 닫기 버튼 노출 여부 / boolean
 * autoClose : 딜레이 이후 자동으로 toast 삭제 여부 / boolean
 * autoCloseDelay : 자동으로 toast 삭제 시, 딜레이 지정 / number
 * children : toast에 포함할 내용 / jsx
 *
 * @param {{h, c, bgc, position, closeOnClick, autoClose, autoCloseDelay, children}}
 * @returns
 */

const Toast = ({
  id,
  h = '50px',
  type = 'success',
  position = 'top',
  closeOnClick = true,
  autoClose = true,
  autoCloseDelay = 3000,
  message,
}) => {
  const [status, setStatus] = React.useState('entry');
  const { remove } = useToast();

  const handleAnimationEnd = () => {
    if (status === 'entry' && autoClose) setTimeout(() => setStatus('dismiss'), autoCloseDelay);
    if (status === 'dismiss') remove(id);
  };

  return (
    <Container status={status} position={position} h={h} bgc={bgc[type]} onAnimationEnd={handleAnimationEnd}>
      {closeOnClick && (
        <ToastCloseButton right="2.5%" iconSize="24px" variant="transparent" onClick={() => setStatus('dismiss')} />
      )}
      <Center px="5%">{message}</Center>
    </Container>
  );
};

export default Toast;
