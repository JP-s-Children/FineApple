import { createPost } from '../../services/posts';
import { create } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';

const useCreateCommentMutation = postId =>
  useCommentMutation({
    requestFn: createPost,
    updateFn: create,
    postId,
  });

export default useCreateCommentMutation;
