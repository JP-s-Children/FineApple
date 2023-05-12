import React from 'react';
import { Chip } from '@mantine/core';

const UsefulCommentChip = ({ useful, commentId, isOneOfCommentsIsUseful, toggleUsefulMutate }) => {
  const [isUseful, setIsUseful] = React.useState(useful);

  return (
    <>
      {((isUseful && isOneOfCommentsIsUseful) || !isOneOfCommentsIsUseful) && (
        <Chip
          checked={isUseful}
          onChange={() => {
            toggleUsefulMutate({ commentId, useful: !isUseful });
            setIsUseful(isUseful => !isUseful);
          }}
          mb="4px"
          ml="auto"
          size="md"
          fw="500"
          radius="xl"
          color="dark"
          variant={isUseful ? 'outline' : 'filled'}>
          유용한 답변으로 채택
        </Chip>
      )}
    </>
  );
};

export default UsefulCommentChip;
