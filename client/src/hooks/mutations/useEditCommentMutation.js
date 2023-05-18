import { editComment } from '../../services/comments';
import { edit } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';

const useEditCommentMutation = postId =>
  useCommentMutation({
    requestFn: ({ commentId, content }) => editComment({ id: commentId, content }),
    updateFn: edit,
    postId,
  });

export default useEditCommentMutation;
