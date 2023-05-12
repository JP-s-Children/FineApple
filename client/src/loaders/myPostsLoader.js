import { myPostsQuery } from '../queries';

const myPostsLoader = queryClient => async () => {
  const query = myPostsQuery();
  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchInfiniteQuery(query));
};

export default myPostsLoader;
