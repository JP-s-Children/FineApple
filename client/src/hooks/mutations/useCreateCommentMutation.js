import { create } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';
import { createComment } from '../../services/comments';

const useCreateCommentMutation = postId =>
  useCommentMutation({
    requestFn: ({ postId, commentInfo }) => createComment({ postId, ...commentInfo }),
    updateFn: create,
    postId,
  });

export default useCreateCommentMutation;
