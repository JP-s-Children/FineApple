import { myProfileQuery } from '../queries';

const myProfileLoader = queryClient => async () => {
  const query = myProfileQuery();

  // eslint-disable-next-line no-return-await
  return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};

export default myProfileLoader;
