import { getPost } from '../services/posts';

const staleTime = 3000;

const postDetailQuery = postId => ({
  queryKey: ['postDetail', postId],
  queryFn: async () => {
    const data = await getPost({ postId });
    return data;
  },
  staleTime,
});

export default postDetailQuery;
