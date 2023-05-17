import { getPopularPostsByCategory } from '../services/posts';

const staleTime = 3000;

const popularPostsByCategoryQuery = ({ category }) => ({
  queryKey: ['category', category],
  queryFn: async () => getPopularPostsByCategory({ category }),

  select: ({ pages }) => pages.map(({ posts }) => posts).flat(),
  staleTime,
});

export default popularPostsByCategoryQuery;
