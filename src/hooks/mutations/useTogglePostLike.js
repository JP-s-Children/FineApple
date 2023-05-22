import { throttle } from 'lodash';
import React from 'react';
import { togglePostLike } from '../../services/posts';
import usePostInfoMutation from './usePostInfoMutation';

const useTogglePostLike = ({ postId }) => {
  const mutate = usePostInfoMutation({
    postId,
    requestFn: ({ postId, checked, email }) => {
      togglePostLike({ id: postId, checked, userId: email });
    },
    updateFn: (oldData, { checked, email }) => ({
      ...oldData,
      like: checked ? [...oldData.like, email] : oldData.like.filter(_email => _email !== email),
    }),
  });

  const throttledMutate = React.useCallback(throttle(mutate, 500), []);

  return throttledMutate;
};

export default useTogglePostLike;
