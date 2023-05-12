import { removeComment } from '../../api/post';
import { remove } from '../../constants/mutateComment';
import usePostInfoMutation from './usePostInfoMutation';

const useRemoveCommentMutation = postId =>
  usePostInfoMutation({
    postId,
    requestFn: removeComment,
    commentUpdateFn: remove,
    postUpdateFn: (oldData, variables) => ({
      ...oldData,
      post: {
        ...oldData.post,
        certified: variables.certified ? false : oldData.post.certified,
        completed: variables.useful ? false : oldData.post.completed,
      },
    }),
  });

export default useRemoveCommentMutation;
