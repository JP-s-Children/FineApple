import { css } from '@emotion/react';

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body[data-theme='light'] {
    --font-color: #000;
    --hover-font-color: #0071e2;
    --body-bg-color: #fff;
    --secondary-bg-color: #fafafa;
    --third-bg-color: #f1f3f5;
    --opacity-bg-color: #e5e5e520;
    --opacity-border-color: #e5e5e5;
    --footer-bg-color: #fafafa;
    --footer-font-color: #6e6e73;
    --like-color: #f59f01;
  }

  body[data-theme='dark'] {
    --font-color: #fff;
    --hover-font-color: #56abff;
    --body-bg-color: #141517;
    --secondary-bg-color: #1a1b1e;
    --third-bg-color: #373a40;
    --opacity-bg-color: #e5e5e530;
    --opacity-border-color: #4b4c53;
    --footer-bg-color: #1a1b1e;
    --footer-font-color: #909296;
    --like-color: #f59f01;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: var(--body-bg-color);
  }

  ul,
  li {
    list-style-type: none;
    padding-left: 0;
  }

  a {
    text-decoration: none;
    color: #0070c9;
  }
`;

export default GlobalStyle;
