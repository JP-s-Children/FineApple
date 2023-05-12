import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Badge, Flex, Group, List, Text, Title } from '@mantine/core';
import { POST_PATH } from '../../../routes/routePaths';
import formattedDate from '../../../utils/formattedDate';
import { AvatarIcon, AppleRecommendIcon, CompletedIcon } from '../..';
import { CATEGORY } from '../../../constants/category';

const Post = styled(List.Item)`
  border: 1px solid var(--opacity-border-color);
  border-radius: 18px;
  cursor: pointer;

  div.mantine-List-itemWrapper {
    width: 100%;

    span {
      display: inline-flex;
    }
  }

  &:hover {
    border: 1px solid var(--hover-font-color);
  }

  @media screen and (max-width: 720px) {
    width: 675px;
  }
`;

const PostLink = styled(Link)`
  padding: 24px;
  width: 100%;
  height: 100%;
`;

const PostDescription = styled(Group)`
  display: flex;
  flex-direction: column;
  align-items: start;
  word-break: keep-all;
`;

const PostItem = ({
  post: { id, title, createAt, category, completed, avatarId, certified, commentsLength, productType },
}) => {
  const conditionalColor = category === CATEGORY.iphone ? 'red' : category === CATEGORY.mac ? 'green' : 'blue';

  return (
    <Post key={id} fz="15px" bg="var(--opacity-bg-color)">
      <PostLink to={`${POST_PATH}/${id}`}>
        <Flex mih={50} gap="xl">
          <AvatarIcon avatarId={avatarId} />
          <PostDescription>
            <Title size="21px" fw="600" c="var(--font-color)">
              {title}
            </Title>
            <Flex direction="column">
              <Text c="var(--font-color)">{formattedDate(new Date(createAt))}</Text>
              <Flex mt="10px" fz="20px" gap="1rem" align="center">
                <CompletedIcon completed={completed} />
                {certified && <AppleRecommendIcon />}
              </Flex>
            </Flex>
          </PostDescription>
          <Flex ml="auto" direction="column" justify="space-between" align="flex-end">
            <Flex gap="8px" mt="4px">
              <Badge size="md" variant="outline" color={conditionalColor}>
                {category}
              </Badge>
              {productType && (
                <Badge size="md" variant="filled" color={conditionalColor}>
                  {productType}
                </Badge>
              )}
            </Flex>
            <Flex gap="4px" align="center" pr="0.8rem" fz="15px" c="var(--font-color)">
              <Text>답글</Text>
              <Text fz="16px" fw="600">
                {commentsLength}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </PostLink>
    </Post>
  );
};

export default PostItem;
