import React from 'react';
import styled from '@emotion/styled';
import { Container, Skeleton } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { postsByNickNameQuery } from '../queries';
import { AvatarProfileInfo, PostSection } from '../components';

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

const CommunityProfile = () => {
  const { nickName } = useParams();

  return (
    <Wrapper>
      <React.Suspense fallback={<Skeleton width="100%" height={200} my="40px" />}>
        <AvatarProfileInfo nickName={nickName} />
      </React.Suspense>
      <React.Suspense fallback={<Skeleton width="100%" height={200} my="40px" />}>
        <PostSection queryFn={postsByNickNameQuery(nickName)} isShownQuestionButton={false} />
      </React.Suspense>
    </Wrapper>
  );
};

export default CommunityProfile;
