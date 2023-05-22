import styled from '@emotion/styled';
import { Text } from '@mantine/core';

const HighlightText = styled(Text)`
  display: inline-block;
  padding: 0 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
  color: #eb5757;
  background-color: var(--opacity-border-color);
`;

export default HighlightText;
