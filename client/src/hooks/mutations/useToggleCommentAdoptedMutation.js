import { toggleAdopted } from '../../constants/mutateComment';
import { toggleCommentAdopted } from '../../services/comments';
import { togglePostCompleted } from '../../services/posts';
import useCommentMutation from './useCommentMutation';
import usePostInfoMutation from './usePostInfoMutation';

const useToggleCommentAdoptedMutation = postId => {
  const postMutate = usePostInfoMutation({
    postId,
    requestFn: ({ postId, adopted }) => togglePostCompleted({ id: postId, completed: adopted }),
    updateFn: (oldData, variables) => ({ ...oldData, completed: variables.adopted }),
  });

  const commentMutate = useCommentMutation({
    postId,
    requestFn: ({ commentId, adopted }) => toggleCommentAdopted({ id: commentId, adopted }),
    updateFn: toggleAdopted,
  });

  return async variables => {
    commentMutate(variables);
    postMutate(variables);
  };
};

export default useToggleCommentAdoptedMutation;
