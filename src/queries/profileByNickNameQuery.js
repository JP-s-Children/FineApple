import { getProfileByNickName } from '../services/profile';

const staleTime = 3000;

const profileByNickNameQuery = nickName => ({
  queryKey: ['profileByNickname', nickName],
  queryFn: async () => {
    const profile = await getProfileByNickName({ nickName });
    return profile;
  },
  staleTime,
  suspense: true,
});

export default profileByNickNameQuery;
