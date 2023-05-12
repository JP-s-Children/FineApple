import { getProfileByNickName } from '../api/profile';

const staleTime = 3000;

const profileByNickNameQuery = nickName => ({
  queryKey: ['profile', nickName],
  queryFn: async () => {
    const { data } = await getProfileByNickName(nickName);
    return data;
  },
  staleTime,
  suspense: true,
});

export default profileByNickNameQuery;
