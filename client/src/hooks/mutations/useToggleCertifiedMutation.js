import { toggleCertified } from '../../constants/mutateComment';
import { toggleCommentCertified } from '../../api/post';
import usePostInfoMutation from './usePostInfoMutation';

const useToggleCertifiedMutation = postId =>
  usePostInfoMutation({
    postId,
    requestFn: toggleCommentCertified,
    commentUpdateFn: toggleCertified,
    postUpdateFn: (oldData, variables) => ({
      ...oldData,
      post: { ...oldData.post, certified: variables.certified },
    }),
  });

export default useToggleCertifiedMutation;
