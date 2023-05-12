import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import useToast from '../useToast';
import userState from '../../recoil/atoms/userState';

const useCommentMutation = ({ requestFn, postId, updateFn, ...options }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const setUser = useSetRecoilState(userState);

  const queryKey = ['comments', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await requestFn({ postId, ...variables });
    },
    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey });

      const prevComments = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, oldData => updateFn(oldData, variables));

      return { prevComments };
    },
    onError: (error, _, { prevComments }) => {
      toast.error({ message: error.response.data.error });
      setUser(null);

      queryClient.setQueryData(queryKey, prevComments);
    },
    ...options,
  });

  return mutate;
};

export default useCommentMutation;
