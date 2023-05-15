import FILTERS from '../constants/filters';

const filterPosts = (posts, currentFilter) =>
  posts.filter(post =>
    currentFilter === FILTERS.active ? !post.completed : currentFilter === FILTERS.completed ? post.completed : true
  ) ?? [];

export default filterPosts;
