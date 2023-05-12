const add = (oldData, variables) => ({
  ...oldData,
  pages: oldData.pages.map((page, idx) =>
    idx === 0
      ? { ...page, comments: [variables.commentInfo, ...page.comments], totalLength: page.totalLength + 1 }
      : { ...page, totalLength: page.totalLength + 1 }
  ),
});

const edit = (oldData, variables) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment =>
      comment.id === variables.commentId ? { ...comment, content: variables.commentInfo.content } : comment
    ),
  })),
});

const remove = (oldData, variables) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.filter(comment => comment.id !== variables.commentId),
    totalLength: page.totalLength - 1,
  })),
});

const toggleUseful = (oldData, { commentId, useful }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment => (comment.id === commentId ? { ...comment, useful } : comment)),
  })),
});

const toggleCertified = (oldData, { commentId, certified }) => ({
  ...oldData,
  pages: oldData.pages.map(page => ({
    ...page,
    comments: page.comments.map(comment => (comment.id === commentId ? { ...comment, certified } : comment)),
  })),
});

export { add, edit, remove, toggleUseful, toggleCertified };
