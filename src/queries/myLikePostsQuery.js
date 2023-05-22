import { getMyLikePosts } from '../services/posts';

const staleTime = 3000;

const myLikePostsQuery = author => ({
  queryKey: ['myLikePosts', author],
  queryFn: async ({ pageParam }) => {
    const data = await getMyLikePosts({ author, pageParam });
    return data;
  },
  getNextPageParam: lastPage => lastPage.nextPage,
  select: ({ pages }) => ({
    posts: pages.map(({ posts }) => posts).flat(),
    totalLength: pages[0].totalLength,
  }),
  staleTime,
  suspense: true,
});

export default myLikePostsQuery;
