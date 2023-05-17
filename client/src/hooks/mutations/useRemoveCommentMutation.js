import { removeComment } from '../../services/comments';
import { remove } from '../../constants/mutateComment';
import usePostInfoMutation from './usePostInfoMutation';

const useRemoveCommentMutation = postId =>
  usePostInfoMutation({
    postId,
    requestFn: ({ commentId }) => removeComment({ id: commentId }),
    commentUpdateFn: remove,
    postUpdateFn: (oldData, variables) => ({
      ...oldData,
      completed: variables.adopted ? false : oldData.completed,
    }),
  });

export default useRemoveCommentMutation;
