import { postDetailQuery } from '../queries';

const postDetailLoader =
  queryClient =>
  async ({ params }) => {
    const query = postDetailQuery(params.postId);

    // eslint-disable-next-line no-return-await
    const post = queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
    return post;
  };

export default postDetailLoader;
