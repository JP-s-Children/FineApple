import React from 'react';
import styled from '@emotion/styled';
import { Table, Text } from '@mantine/core';
import { PopupModal } from '../../common';

const SubTitle = styled.h2`
  padding-top: 40px;
  padding-bottom: 10px;
`;

const PointTable = styled(Table)`
  margin-top: 20px;
  color: var(--font-color);
`;

/**
 * PopupModal - RuleModal
 * @param {{
 * opened: boolean
 * onClose: () => void
 * }} props
 */
const RuleModal = ({ opened, onClose }) => {
  const pointRule = [
    { activity: '게시물을 작성하여 질문을 합니다.	', points: '10 포인트' },
    { activity: `질문 작성자가 해당 답변을 '유용함'으로 표시했습니다.	`, points: '20 포인트' },
  ];

  const levelRule = [
    {
      level: 1,
      point: 0,
      benefit:
        '환영합니다! 포인트를 획득하려면 질문을 하거나 질문에 답글을 남기세요. 다른 회원을 돕고 포인트를 획득하여 레벨을 올리십시오.',
    },
    {
      level: 2,
      point: 100,
      benefit: '선화에게 칭찬을 받을 수 있습니다.',
    },
    {
      level: 3,
      point: 200,
      benefit: '혁민이에게 칭찬을 받을 수 있습니다.',
    },
    {
      level: 4,
      point: 300,
      benefit: '준표에게 칭찬을 받을 수 있습니다.',
    },
  ];

  return (
    <PopupModal opened={opened} onClose={onClose} title="커뮤니티 포인트/레벨">
      <Text>FineApple 지원 커뮤니티에 참여하여 포인트를 획득하고, 레벨을 올리며, 특전을 얻을 수 있습니다.</Text>

      <SubTitle>포인트 획득하기</SubTitle>
      <Text>
        FineApple 지원 커뮤니티에 적극적으로 참여하여 양질의 콘텐츠를 공유하면 포인트를 획득하고 인정을 받을 수
        있습니다. 포인트를 획득할 수 있는 활동 및 획득하게 되는 포인트는 다음과 같습니다.
      </Text>

      <PointTable>
        <thead>
          <tr>
            <th>활동</th>
            <th>획득 포인트</th>
          </tr>
        </thead>
        <tbody>
          {pointRule.map(({ activity, points }, idx) => (
            <tr key={idx}>
              <td>{activity}</td>
              <td>{points}</td>
            </tr>
          ))}
        </tbody>
      </PointTable>

      <SubTitle>레벨 올리고 특전 받기</SubTitle>
      <Text>각 사용자 레벨에서 얻을 수 있는 특전이 아래에 나와 있습니다.</Text>

      <PointTable>
        <thead>
          <tr>
            <th>레벨</th>
            <th>포인트</th>
            <th>얻을 수 있는 특전</th>
          </tr>
        </thead>
        <tbody>
          {levelRule.map(({ level, point, benefit }, idx) => (
            <tr key={idx}>
              <td>{level}</td>
              <td>{point}</td>
              <td>{benefit}</td>
            </tr>
          ))}
        </tbody>
      </PointTable>

      <SubTitle>순위표에 이름 올리기</SubTitle>
      <Text>
        FineApple 지원 커뮤니티에서 선호하는 제품 영역에 관한 전문 지식과 유용한 답변을 공유하면 순위표에 이름을 올릴 수
        있습니다. 순위표에는 각 제품 커뮤니티에서 획득한 포인트에 따라 순위가 높은 순서대로 회원이 표시됩니다. 커뮤니티
        페이지 하단으로 스크롤하면 누가 해당 영역의 제품 전문가인지 확인할 수 있습니다. 선의의 경쟁을 통해 서로 동기를
        부여하고 양질의 콘텐츠를 공유해 보세요.
      </Text>
    </PopupModal>
  );
};

export default RuleModal;
