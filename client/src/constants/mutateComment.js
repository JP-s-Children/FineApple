const create = (oldData, { commentInfo }) => ({
  ...oldData,
  pages: oldData.pages.map((page, idx) =>
    idx === 0
      ? { ...page, comments: [commentInfo, ...page.comments], totalLength: page.totalLength + 1 }
      : { ...page, totalLength: page.totalLength + 1 }
  ),
});

const edit = (oldData, { commentId, content }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment => (comment.id === commentId ? { ...comment, content } : comment)),
  })),
});

const remove = (oldData, { commentId }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.filter(comment => comment.id !== commentId),
    totalLength: page.totalLength - 1,
  })),
});

const toggleAdopted = (oldData, { commentId, adopted }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment => (comment.id === commentId ? { ...comment, adopted } : comment)),
  })),
});

const toggleCertified = (oldData, { commentId, certified }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment => (comment.id === commentId ? { ...comment, certified } : comment)),
  })),
});

export { create, edit, remove, toggleAdopted, toggleCertified };
