import React from 'react';
import { useRecoilValue } from 'recoil';
import { Portal } from '@mantine/core';
import toastState from '../../recoil/atoms/toastState';
import Toast from './Toast';

const Toasts = () => {
  const toasts = useRecoilValue(toastState);

  return (
    <>
      {toasts.length !== 0 && (
        <Portal>
          {toasts.map(toast => (
            <Toast key={toast.id} {...toast}></Toast>
          ))}
        </Portal>
      )}
    </>
  );
};

export default Toasts;
