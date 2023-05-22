import { getMyProfile } from '../services/profile';

const staleTime = 3000;

const myProfileQuery = email => ({
  queryKey: ['myProfile', email],
  queryFn: async () => {
    const data = await getMyProfile({ email });
    return data;
  },
  staleTime,
  suspense: true,
});

export default myProfileQuery;
