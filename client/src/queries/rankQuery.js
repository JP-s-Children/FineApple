import { getRank } from '../api/rank';

const staleTime = 3000;

const rankQuery = (topCount = '10') => ({
  queryKey: ['rank', topCount],
  queryFn: async () => {
    const { data: usersRank } = await getRank(topCount);
    return usersRank;
  },
  staleTime,
});

export default rankQuery;
