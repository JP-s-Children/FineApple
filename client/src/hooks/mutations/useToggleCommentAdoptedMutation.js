import { toggleAdopted } from '../../constants/mutateComment';
import { toggleCommentAdopted } from '../../services/comments';
import { togglePostCompleted } from '../../services/posts';
import useCommentMutation from './useCommentMutation';
import usePostInfoMutation from './usePostInfoMutation';

const useToggleCommentAdoptedMutation = postId => {
  const commentMutate = useCommentMutation({
    postId,
    requestFn: ({ commentId, adopted }) => toggleCommentAdopted({ id: commentId, adopted }),
    updateFn: toggleAdopted,
  });

  const postMutate = usePostInfoMutation({
    postId,
    requestFn: ({ postId, adopted }) => togglePostCompleted({ id: postId, completed: adopted }),
    updateFn: (oldData, variables) => ({ ...oldData, post: { ...oldData.post, completed: variables.adopted } }),
  });

  return variables => {
    commentMutate(variables);
    postMutate(variables);
  };
};

export default useToggleCommentAdoptedMutation;
