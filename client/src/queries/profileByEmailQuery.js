import { getProfileByEmail } from '../services/profile';

const staleTime = 3000;

const profileByEmailQuery = email => ({
  queryKey: ['profile', email],
  queryFn: async () => {
    const profile = await getProfileByEmail({ email });
    return profile;
  },
  staleTime,
  suspense: true,
});

export default profileByEmailQuery;
