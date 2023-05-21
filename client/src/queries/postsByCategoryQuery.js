import { getPostsByCategory } from '../services/posts';

const staleTime = 3000;

const postsByCategoryQuery = ({ category, subCategory }) => ({
  queryKey: ['postsByCategory', category, subCategory],
  queryFn: async ({ pageParam }) => getPostsByCategory({ category, subCategory, pageParam }),

  getNextPageParam: lastPage => lastPage.nextPage,

  select: ({ pages }) => ({ posts: pages.map(({ posts }) => posts).flat(), totalLength: pages[0].totalLength }),
  staleTime,
});

export default postsByCategoryQuery;
