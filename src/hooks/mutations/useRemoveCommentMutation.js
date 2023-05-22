import { removeComment } from '../../services/comments';
import { remove } from '../../constants/mutateComment';
import usePostInfoMutation from './usePostInfoMutation';
import useCommentMutation from './useCommentMutation';
import { togglePostCompleted } from '../../services/posts';

const useRemoveCommentMutation = postId => {
  const postMutate = usePostInfoMutation({
    postId,
    requestFn: ({ adopted }) => {
      if (!adopted) return;

      togglePostCompleted({ id: postId, completed: false });
    },
    updateFn: (oldData, variables) => {
      if (!variables.adopted) return oldData;

      return { ...oldData, completed: false };
    },
  });

  const commentMutate = useCommentMutation({
    requestFn: ({ commentId }) => removeComment({ id: commentId }),
    updateFn: remove,
    adoptedCommentUpdateFn: ({ prevAdoptedComment }, { adopted }) => (adopted ? null : prevAdoptedComment),
    postId,
  });

  return variables => {
    commentMutate(variables);
    postMutate(variables);
  };
};

export default useRemoveCommentMutation;
