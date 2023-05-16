import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { Badge, Flex, Group, List, Text, Title } from '@mantine/core';
import { POST_PATH } from '../../../constants/routes';
import formattedDate from '../../../utils/formattedDate';
import { CompletedIcon } from '../..';

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
  width: 100%;
  word-break: keep-all;
`;

const PostItem = ({ post: { id, title, createAt, category, subCategory, completed, like, commentsLength } }) => {
  const conditionalColor = category === 'computer-it' ? 'red' : category === 'game' ? 'yellow' : 'violet';

  return (
    <Post key={id} fz="15px" bg="var(--opacity-bg-color)">
      <PostLink to={`${POST_PATH}/${id}`}>
        <Flex gap="8px" mb="1.25rem">
          <Badge size="md" variant="outline" color={conditionalColor}>
            {category}
          </Badge>
          {subCategory && (
            <Badge size="md" variant="filled" color={conditionalColor}>
              {subCategory}
            </Badge>
          )}
        </Flex>

        <Flex justify="space-between">
          <PostDescription>
            <Title size="21px" fw="600" c="var(--font-color)">
              {title}
            </Title>
            <Text c="var(--footer-font-color)">{formattedDate(createAt)}</Text>
            <Flex w="100%" mt="1rem" justify="space-between" fz="15px" c="var(--font-color)">
              <CompletedIcon completed={completed} />
              <Flex>
                <Flex mr="1rem" gap="0.5rem" align="center">
                  <Text>답변</Text>
                  <Text fz="1.2rem" fw="500">
                    {commentsLength}
                  </Text>
                </Flex>
                <Flex mr="1rem" gap="0.4rem" align="center">
                  <AiFillHeart size="20" color="#F59F01" />
                  <Text fz="1.2rem" fw="500">
                    {like.length}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </PostDescription>
        </Flex>
      </PostLink>
    </Post>
  );
};

export default PostItem;
