import React from 'react';
import styled from '@emotion/styled';
import { Table } from '@mantine/core';
import { RankItem } from '..';

const TableContainer = styled(Table)`
  text-align: center;
  max-width: 1024px;
  color: var(--font-color);
  font-size: 2.4rem;

  tr {
    border-top: 1px solid var(--opacity-border-color);
  }

  th {
    border-bottom: none !important;
    text-align: center !important;
  }

  td {
    border: none !important;
  }

  tbody tr:nth-of-type(odd) {
    background-color: var(--opacity-bg-color);
  }
`;

const RankTable = ({ users }) => (
  <TableContainer horizontalSpacing="md" verticalSpacing="xl" fontSize="lg">
    <thead>
      <tr>
        <th>Rank</th>
        <th>User</th>
        <th>Nickname</th>
        <th>Level</th>
        <th>Point</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <RankItem key={user.rank} {...user} />
      ))}
    </tbody>
  </TableContainer>
);

export default RankTable;
