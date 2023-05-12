import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import userState from '../../recoil/atoms/userState';

const usePostInfoMutation = ({ postId, requestFn, commentUpdateFn, postUpdateFn, ...options }) => {
  const queryClient = useQueryClient();
  const setUser = useSetRecoilState(userState);

  const commentQueryKey = ['comments', postId];
  const postDetailQueryKey = ['postDetail', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await requestFn({ postId, ...variables });
    },

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: ['comments', 'postDetail'] });

      console.log(variables);

      const prevComments = queryClient.getQueryData(commentQueryKey);
      const prevPost = queryClient.getQueryData(postDetailQueryKey);

      queryClient.setQueryData(commentQueryKey, oldData => commentUpdateFn(oldData, variables));
      queryClient.setQueryData(postDetailQueryKey, oldData => postUpdateFn(oldData, variables));

      return { prevComments, prevPost };
    },
    onError: (_, __, { prevComments, prevPost }) => {
      setUser(null);

      queryClient.setQueryData(commentQueryKey, prevComments);
      queryClient.setQueryData(postDetailQueryKey, prevPost);
    },
    ...options,
  });

  return mutate;
};

export default usePostInfoMutation;
