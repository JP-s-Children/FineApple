import { useQuery } from '@tanstack/react-query';
import { getAdoptedComment } from '../../services/comments';
import { specifySnapshotIntoData } from '../../services/utils';

const useAdoptedCommentQuery = ({ postId }) => {
  const { data } = useQuery({
    queryKey: ['adopted', postId],
    queryFn: async () => {
      const snapshot = await getAdoptedComment({ postId });

      return specifySnapshotIntoData(snapshot)[0] ?? null;
    },
  });

  return data;
};

export default useAdoptedCommentQuery;
