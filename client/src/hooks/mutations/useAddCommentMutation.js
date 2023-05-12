import { addComment } from '../../api/post';
import { add } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';

const useAddCommentMutation = postId =>
  useCommentMutation({
    requestFn: addComment,
    updateFn: add,
    postId,
  });

export default useAddCommentMutation;
