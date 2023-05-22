import { getMyPosts } from '../services/posts';

const staleTime = 3000;

const myPostsQuery = author => ({
  queryKey: ['myPosts', author],
  queryFn: async ({ pageParam }) => {
    const data = await getMyPosts({ author, pageParam });
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

export default myPostsQuery;
