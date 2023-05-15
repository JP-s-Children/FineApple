const sortPosts = (posts, currentSort) =>
  [...posts].sort((a, b) =>
    currentSort === 'recent'
      ? new Date(b.createAt) - new Date(a.createAt)
      : currentSort === 'old'
      ? new Date(a.createAt) - new Date(b.createAt)
      : a.like - b.like
  );

export default sortPosts;
