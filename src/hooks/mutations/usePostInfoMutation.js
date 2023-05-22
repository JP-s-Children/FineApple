import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import userState from '../../recoil/atoms/userState';

const usePostInfoMutation = ({ postId, requestFn, updateFn, ...options }) => {
  const queryClient = useQueryClient();
  const setUser = useSetRecoilState(userState);

  const postDetailQueryKey = ['postDetail', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await requestFn({ postId, ...variables });
    },

    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey: ['postDetail'] });

      const prevPost = queryClient.getQueryData(postDetailQueryKey);

      queryClient.setQueryData(postDetailQueryKey, oldData => updateFn(oldData, variables));

      return { prevPost };
    },
    onError: (_, __, { prevPost }) => {
      setUser(null);

      queryClient.setQueryData(postDetailQueryKey, prevPost);
    },
    ...options,
  });

  return mutate;
};

export default usePostInfoMutation;
