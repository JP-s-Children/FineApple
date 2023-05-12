import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@mantine/hooks';
import { Divider, Flex, Group } from '@mantine/core';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { ImEarth } from 'react-icons/im';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { InfoCard } from '../../common';
import { ContentInfoModal, QuestionInfoModal, RuleInfoModal } from '..';

const Container = styled(Flex)`
  margin-top: 6rem;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  background-color: var(--opacity-bg-color);
`;

const Tutorials = () => {
  const [questionInfoModalOpened, { close: onQuestionInfoModalClose, open: onQuestionInfoModalOpen }] =
    useDisclosure(false);
  const [contentInfoModalOpened, { close: onContentInfoModalClose, open: onContentInfoModalOpen }] =
    useDisclosure(false);
  const [ruleInfoModalOpened, { close: onRuleInfoModalClose, open: onRuleInfoModalOpen }] = useDisclosure(false);

  return (
    <Container>
      <Group>
        <InfoCard icon={<ImEarth />} title={'답변을 찾고 질문하기'} onClick={onQuestionInfoModalOpen} />
        <QuestionInfoModal opened={questionInfoModalOpened} onClose={onQuestionInfoModalClose} />
      </Group>
      <Divider orientation="vertical" />
      <Group>
        <InfoCard icon={<IoFilterCircleOutline />} title={'콘텐츠 한 눈에 살펴보기'} onClick={onContentInfoModalOpen} />
        <ContentInfoModal opened={contentInfoModalOpened} onClose={onContentInfoModalClose} />
      </Group>
      <Divider orientation="vertical" />
      <Group>
        <InfoCard icon={<HiOutlineTrophy />} title={'포인트 획득, 레벨 올리기'} onClick={onRuleInfoModalOpen} />
        <RuleInfoModal opened={ruleInfoModalOpened} onClose={onRuleInfoModalClose} />
      </Group>
    </Container>
  );
};

export default Tutorials;
