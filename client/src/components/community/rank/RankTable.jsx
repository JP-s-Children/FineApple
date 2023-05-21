import React from 'react';
import { Table } from '@mantine/core';
import styled from '@emotion/styled';
import { RankItem, ShowMoreButton } from '..';
import useRankUsersQuery from '../../../hooks/queries/useRankUsersQuery';

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

  th:nth-of-type(3) {
    width: 40%;
  }

  td {
    border: none !important;
  }

  tbody tr:nth-of-type(odd) {
    background-color: var(--opacity-bg-color);
  }
`;

const RankTable = () => {
  const {
    data: { users },
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useRankUsersQuery();

  return (
    <>
      <TableContainer horizontalSpacing="sm" verticalSpacing="xs" fontSize="lg">
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
          {users.map((user, rank) => (
            <RankItem key={rank} {...user} rank={rank + 1} />
          ))}
        </tbody>
      </TableContainer>

      {hasNextPage && <ShowMoreButton loading={isFetchingNextPage} onClick={fetchNextPage} />}
    </>
  );
};

export default RankTable;
