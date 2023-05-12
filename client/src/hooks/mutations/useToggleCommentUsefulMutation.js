import { toggleUseful } from '../../constants/mutateComment';
import { toggleCommentUseFul } from '../../api/post';
import usePostInfoMutation from './usePostInfoMutation';

const useToggleCommentUsefulMutation = postId =>
  usePostInfoMutation({
    postId,
    requestFn: toggleCommentUseFul,
    commentUpdateFn: toggleUseful,
    postUpdateFn: (oldData, variables) => ({ ...oldData, post: { ...oldData.post, completed: variables.useful } }),
  });

export default useToggleCommentUsefulMutation;
