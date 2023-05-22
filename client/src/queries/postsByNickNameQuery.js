import { getPostsByNickName } from '../api/posts';

const staleTime = 3000;

const postsByNickNameQuery = nickName => ({
  queryKey: ['postsByNickName', nickName],
  queryFn: async ({ pageParam = 1 }) => {
    const { data } = await getPostsByNickName({ param: nickName, pageParam });
    return data;
  },
  getNextPageParam: (lastPage, allPages) => {
    const nextPage = allPages.length + 1;
    const { totalLength } = lastPage;

    return totalLength === 0 || Math.ceil(totalLength / allPages[0].posts.length) === allPages.length
      ? undefined
      : nextPage;
  },
  select: data => ({
    posts: data.pages.map(({ posts }) => posts).flat(),
    totalLength: data.pages[0].totalLength,
  }),
  staleTime,
  suspense: true,
});

export default postsByNickNameQuery;
