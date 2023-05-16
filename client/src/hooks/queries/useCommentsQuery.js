import { useInfiniteQuery } from '@tanstack/react-query';
import { getComments } from '../../services/comments';

const staleTime = 3000;

const useCommentsQuery = ({ postId }) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['comments', postId],
    queryFn: async ({ pageParam }) => {
      const data = await getComments({ postId, pageParam });

      return data;
    },
    getNextPageParam: lastPage => lastPage.nextPage,

    select: ({ pages }) => ({
      comments: pages.map(({ comments }) => comments).flat(),
      totalLength: pages[0].totalLength,
    }),

    staleTime,
    suspense: true,
  });

  return { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch };
};

export default useCommentsQuery;
