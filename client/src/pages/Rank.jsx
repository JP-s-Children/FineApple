import React from 'react';
import styled from '@emotion/styled';
import { Chip, Container, Flex, Group, Title } from '@mantine/core';
import { RankTable } from '../components';

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

const RankChip = styled(Chip)`
  .mantine-Chip-label {
    background: none;
    color: var(--font-color);
  }
`;

const Rank = () => {
  const [curTopCount, setCurTopCount] = React.useState(10);

  return (
    <Wrapper>
      <Title size="52px" mt="40px" mb="40px" ta="center">
        사용자 순위
      </Title>

      <Flex justify="flex-end" mb="30px">
        <Chip.Group value={curTopCount} onChange={setCurTopCount}>
          <Group position="center">
            <RankChip value={10}>top 10</RankChip>
            <RankChip value={20}>top 20</RankChip>
            <RankChip value={30}>top 30</RankChip>
          </Group>
        </Chip.Group>
      </Flex>

      <RankTable topCount={curTopCount} />
    </Wrapper>
  );
};

export default Rank;
