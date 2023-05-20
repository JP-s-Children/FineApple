import { getUserRanking } from '../services/profile';

const staleTime = 3000;

const rankQuery = (topCount = 10) => ({
  queryKey: ['rank', topCount],
  queryFn: async () => {
    const userRaning = await getUserRanking({ topCount });
    return userRaning;
  },
  staleTime,
});

export default rankQuery;
