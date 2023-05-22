import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@mantine/hooks';
import { Divider, Flex } from '@mantine/core';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { ImEarth } from 'react-icons/im';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { InfoCard } from '../../common';
import { ContentInfoModal, QuestionInfoModal, RuleInfoModal } from '..';

const Container = styled(Flex)`
  justify-content: space-around;
  gap: 30px;
  margin-top: 8rem;
  padding: 2rem;
  width: 940px;
  border-radius: 20px;
  border: 1px solid var(--opacity-border-color);
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
      <Flex>
        <InfoCard icon={<ImEarth />} title={'답변을 찾고 질문하기'} onClick={onQuestionInfoModalOpen} />
        <QuestionInfoModal opened={questionInfoModalOpened} onClose={onQuestionInfoModalClose} />
      </Flex>
      <Divider orientation="vertical" color="var(--opacity-border-color)" />
      <Flex>
        <InfoCard icon={<IoFilterCircleOutline />} title={'콘텐츠 한 눈에 살펴보기'} onClick={onContentInfoModalOpen} />
        <ContentInfoModal opened={contentInfoModalOpened} onClose={onContentInfoModalClose} />
      </Flex>
      <Divider orientation="vertical" color="var(--opacity-border-color)" />
      <Flex>
        <InfoCard icon={<HiOutlineTrophy />} title={'포인트 획득, 레벨 올리기'} onClick={onRuleInfoModalOpen} />
        <RuleInfoModal opened={ruleInfoModalOpened} onClose={onRuleInfoModalClose} />
      </Flex>
    </Container>
  );
};

export default Tutorials;
