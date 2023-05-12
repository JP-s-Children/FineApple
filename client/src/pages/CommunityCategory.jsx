import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mantine/core';
import { CommunityCategorySection } from '../components';

const Wrapper = styled(Container)`
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 5rem;
  font-size: 0.75rem;
  color: var(--font-color);
`;

const CommunityCategory = ({ category }) => (
  <Wrapper>
    <CommunityCategorySection category={category} />
  </Wrapper>
);

export default CommunityCategory;
