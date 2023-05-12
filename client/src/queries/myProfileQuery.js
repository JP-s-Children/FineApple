import { getMyProfile } from '../api/profile';

const staleTime = 3000;

const myProfileQuery = () => ({
  queryKey: ['profile'],
  queryFn: async () => {
    const { data } = await getMyProfile();
    return data;
  },
  staleTime,
});

export default myProfileQuery;
