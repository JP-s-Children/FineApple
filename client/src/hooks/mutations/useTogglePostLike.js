import { togglePostLike } from '../../services/posts';
import usePostInfoMutation from './usePostInfoMutation';

const useTogglePostLike = ({ postId }) =>
  usePostInfoMutation({
    postId,
    requestFn: ({ postId, checked, email }) => {
      togglePostLike({ id: postId, checked, userId: email });
    },
    updateFn: (oldData, { checked, email }) => ({
      ...oldData,
      like: checked ? [...oldData.like, email] : oldData.like.filter(_email => _email !== email),
    }),
  });

export default useTogglePostLike;
