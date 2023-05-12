import { getPost } from '../../firebase/posts';

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
