import { getPostsByCategory } from '../../firebase/posts';
import { specifySnapshotIntoData } from '../../firebase/utils';

const staleTime = 3000;

const postsByCategoryQuery = ({ category, subCategory }) => ({
  queryKey: ['category', category, subCategory],
  queryFn: async ({ pageParam }) => getPostsByCategory({ category, subCategory, pageParam }),

  getNextPageParam: lastPage => (lastPage.size === 10 ? lastPage.docs[lastPage.docs.length - 1] : undefined),
  select: ({ pages }) => pages.map(postSnapshot => specifySnapshotIntoData(postSnapshot)).flat(),
  staleTime,
});

export default postsByCategoryQuery;
