import React from 'react';
import styled from '@emotion/styled';
import { Container, Title } from '@mantine/core';
import { Loader, RankTable } from '../components';

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

const Rank = () => (
  <Wrapper>
    <Title size="52px" mt="40px" mb="40px" ta="center">
      사용자 순위
    </Title>

    <React.Suspense fallback={<Loader />}>
      <RankTable />
    </React.Suspense>
  </Wrapper>
);

export default Rank;
