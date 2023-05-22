import React from 'react';

const resolveTheme = () => {
  let theme = localStorage.getItem('theme');

  if (!theme) {
    const mediaQuery = '(prefers-color-scheme: dark)';
    theme = window.matchMedia(mediaQuery).matches ? 'dark' : 'light';
  }

  return theme;
};

const useTheme = () => {
  const [theme, setTheme] = React.useState(resolveTheme);

  React.useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, toggleTheme };
};

export default useTheme;
