import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import useToast from '../useToast';
import userState from '../../recoil/atoms/userState';

const useCommentMutation = ({ requestFn, postId, updateFn, adoptedCommentUpdateFn, ...options }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const setUser = useSetRecoilState(userState);

  const queryKey = ['comments', postId];
  const adoptedQueryKey = ['adopted', postId];

  const { mutate } = useMutation({
    mutationFn: async variables => {
      await requestFn({ postId, ...variables });
    },
    onMutate: async variables => {
      await queryClient.cancelQueries({ queryKey });

      const prevComments = queryClient.getQueryData(queryKey);
      const prevAdoptedComment = queryClient.getQueryData(adoptedQueryKey);

      queryClient.setQueryData(queryKey, oldData => updateFn(oldData, variables));

      if (adoptedCommentUpdateFn)
        queryClient.setQueryData(adoptedQueryKey, () =>
          adoptedCommentUpdateFn({ prevComments, prevAdoptedComment }, variables)
        );

      return { prevComments, prevAdoptedComment };
    },
    onError: (error, _, { prevComments, prevAdoptedComment }) => {
      toast.error({ message: error.response.data.error });
      setUser(null);

      queryClient.setQueryData(queryKey, prevComments);
      queryClient.setQueryData(adoptedQueryKey, prevAdoptedComment);
    },
    ...options,
  });

  return mutate;
};

export default useCommentMutation;
