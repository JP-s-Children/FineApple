import useCommentMutation from './useCommentMutation';
import { toggleCommentLike } from '../../services/comments';
import { toggleLike } from '../../constants/mutateComment';

const useToggleLikeMutation = postId =>
  useCommentMutation({
    requestFn: ({ commentId, checked, email }) => {
      toggleCommentLike({ id: commentId, checked, userId: email });
    },
    updateFn: toggleLike,
    adoptedCommentUpdateFn: ({ prevAdoptedComment }, { checked, email }) => ({
      ...prevAdoptedComment,
      like: checked ? [...prevAdoptedComment.like, email] : prevAdoptedComment.like.filter(_email => _email !== email),
    }),
    postId,
  });

export default useToggleLikeMutation;
