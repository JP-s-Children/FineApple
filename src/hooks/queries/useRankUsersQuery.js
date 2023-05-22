import { useInfiniteQuery } from '@tanstack/react-query';
import { getUserRanking } from '../../services/profile';

const staleTime = 3000;

const useRankUsersQuery = () => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['rank'],
    queryFn: async ({ pageParam }) => {
      const data = await getUserRanking({ pageParam });
      return data;
    },
    getNextPageParam: lastPage => lastPage.nextPage,
    select: ({ pages }) => ({ users: pages.map(({ users }) => users).flat(), totalLength: pages[0].totalLength }),
    staleTime,
    suspense: true,
  });

  return { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch };
};

export default useRankUsersQuery;
