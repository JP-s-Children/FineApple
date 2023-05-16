import { getPostsByCategory } from '../services/posts';

const staleTime = 3000;

const postsByCategoryQuery = ({ category, subCategory }) => ({
  queryKey: ['category', category, subCategory],
  queryFn: async ({ pageParam }) => getPostsByCategory({ category, subCategory, pageParam }),

  getNextPageParam: lastPage => lastPage.nextPage,

  select: ({ pages }) => pages.map(({ posts }) => posts).flat(),
  staleTime,
});

export default postsByCategoryQuery;
