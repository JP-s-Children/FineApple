import { getPopularPostsByCategory } from '../services/posts';

const staleTime = 3000;

const popularPostsByCategoryQuery = ({ category }) => ({
  queryKey: ['popularPostsByCategory', category],
  queryFn: async () => getPopularPostsByCategory({ category }),

  select: ({ pages }) => ({ posts: pages.map(({ posts }) => posts).flat(), totalLength: pages[0].totalLength }),
  staleTime,
});

export default popularPostsByCategoryQuery;
