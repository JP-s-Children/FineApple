import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AvatarIcon } from '../..';
import { PROFILE_PATH } from '../../../routes/routePaths';

const AvatarWrapper = styled.td`
  display: flex;
  justify-content: center;
`;

const RankItem = ({ rank, avatarId, nickName, level, point }) => (
  <tr>
    <td>{rank}</td>
    <AvatarWrapper>
      <Link to={`${PROFILE_PATH}/${nickName}`}>
        <AvatarIcon avatarId={avatarId} />
      </Link>
    </AvatarWrapper>
    <td>
      <Link to={`${PROFILE_PATH}/${nickName}`}>{nickName}</Link>
    </td>
    <td>{level}</td>
    <td>{point}</td>
  </tr>
);
export default RankItem;
