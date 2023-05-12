import { editComment } from '../../api/post';
import { edit } from '../../constants/mutateComment';
import useCommentMutation from './useCommentMutation';

const useEditCommentMutation = postId =>
  useCommentMutation({
    requestFn: editComment,
    updateFn: edit,
    postId,
  });

export default useEditCommentMutation;
