import axios from 'axios';

const getSearchedPosts = ({ keyword = '', category }) =>
  axios.get(`/api/posts/search?keyword=${keyword}&category=${category}`);

const getPostsByCategory = ({ param: category, pageParam }) =>
  axios.get(`/api/posts?category=${category}&page=${pageParam}`);

const getPostsByNickName = ({ param: nickName, pageParam }) =>
  axios.get(`/api/posts/profile?nickname=${nickName}&page=${pageParam}`);

const getMyPosts = ({ pageParam }) => axios.get(`/api/posts/me?page=${pageParam}`);

export { getSearchedPosts, getPostsByCategory, getMyPosts, getPostsByNickName };
