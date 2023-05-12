import { useInfiniteQuery } from '@tanstack/react-query';

const useCommentsQuery = ({ queryFn, param, select }) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['comments', param],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await queryFn({ param, pageParam });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      const { totalLength } = lastPage;
      return totalLength === 0 || Math.ceil(totalLength / 10) === allPages.length ? undefined : nextPage;
    },
    suspense: true,
    select,
  });

  return { data, hasNextPage, isFetchingNextPage, fetchNextPage, refetch };
};

export default useCommentsQuery;
