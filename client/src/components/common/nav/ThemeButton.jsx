import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';
import useTheme from '../../../hooks/useTheme';

const Container = styled(Button)`
  border: none;
  height: 100%;
  padding: 8px;
  :hover {
    background: none;
    i {
      color: var(--hover-font-color);
    }
  }
`;

const ThemeIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  color: var(--font-color);
`;

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container variant="subtle" onClick={toggleTheme}>
      <ThemeIcon>{theme === 'light' ? <BsMoon size="20" /> : <BsSun size="20" />}</ThemeIcon>
    </Container>
  );
};

export default ThemeButton;
