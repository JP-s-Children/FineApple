import { rankQuery } from '../queries';

const rankLoader = queryClient => async () => {
  const query = rankQuery();

  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export default rankLoader;
