import axios from 'axios';

const getPost = postId => axios.get(`/api/post/${postId}`);

const addPost = postInfo => axios.post('/api/post', { postInfo });

const removePost = postId => axios.delete(`/api/post/${postId}`);

const addComment = ({ postId, commentInfo }) => axios.post(`/api/post/${postId}/comment`, { commentInfo });

const editComment = ({ postId, commentId, commentInfo }) =>
  axios.patch(`/api/post/${postId}/comment/${commentId}`, { commentInfo });

const removeComment = ({ postId, commentId }) => axios.delete(`/api/post/${postId}/comment/${commentId}`);

const getComments = ({ param: postId, pageParam }) => axios.get(`/api/post/${postId}/comment?page=${pageParam}`);

const toggleCommentUseFul = ({ postId, commentId, useful }) =>
  axios.patch(`/api/post/${postId}/comment/useful/${commentId}`, { useful });

const toggleCommentCertified = ({ postId, commentId, certified }) =>
  axios.patch(`/api/post/${postId}/comment/certified/${commentId}`, { certified });

export {
  getPost,
  addPost,
  removePost,
  addComment,
  editComment,
  removeComment,
  getComments,
  toggleCommentUseFul,
  toggleCommentCertified,
};
