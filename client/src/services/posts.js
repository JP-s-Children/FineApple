import {
  getFirestore,
  collection,
  doc,
  or,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
  query,
  where,
  startAfter,
  limit,
  and,
} from 'firebase/firestore';
import { db } from './firebase';
import { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt } from './utils';

const COLLECTION = 'posts';
const PAGE_SIZE = 10;

// const getPosts = async () => {
//   const postSnapshot = await getDocs(collection(db, COLLECTION));

//   return specifySnapshotIntoData(postSnapshot);
// };

const getPosts = async ({ pageParam }) => {
  const q = pageParam
    ? query(collection(db, COLLECTION), startAfter(pageParam), limit(PAGE_SIZE))
    : query(collection(db, COLLECTION), limit(PAGE_SIZE));

  const postSnapshot = await getDocs(q);

  return postSnapshot;
};

const paginationPostsQuery = ({ pageParam, searchCondition }) => {
  const dbRef = collection(db, COLLECTION);
  const limitPage = limit(PAGE_SIZE);

  return pageParam
    ? query(dbRef, searchCondition, startAfter(pageParam), limitPage)
    : query(dbRef, searchCondition, limit(PAGE_SIZE));
};

const getPostsByCategory = async ({ category = '', subCategory = '', pageParam }) => {
  const q = paginationPostsQuery({
    pageParam,
    searchCondition: subCategory
      ? and(where('category', '==', category), where('subCategory', '==', subCategory))
      : where('category', '==', category),
  });

  const postSnapshot = await getDocs(q);

  return postSnapshot;
};

// select된 값을 keyword로 받는 작업도 필요
const getSearchedPosts = async ({ keyword = '', category = '', subCategory = '' }) => {
  const postsRef = collection(db, COLLECTION);
  const postSnapshot = await getDocs(collection(db, COLLECTION));

  const q = query(postsRef, or(where('category', '==', category), where('subCategory', '==', subCategory)));
  const filteredPostSnapshot = await getDocs(q);

  const searchedPosts = specifySnapshotIntoData(category === '' ? postSnapshot : filteredPostSnapshot)
    .filter(({ title }) => new RegExp(keyword, 'i').test(title))
    .slice(0, 5);

  return searchedPosts;
};

// 내가 작성한 글 목록 :auth 정보 필요
const getMyPosts = async ({ author, pageParam }) => {
  const q = paginationPostsQuery({ pageParam, searchCondition: where('author', '==', author) });
  const postSnapshot = await getDocs(q);

  return postSnapshot;
};

const getPost = async ({ postId }) => {
  const postSnapshot = await getDoc(doc(db, COLLECTION, postId));
  const postData = postSnapshot.data();

  return {
    ...postData,
    createAt: formattedCreateAt(postData),
    updateAt: formattedUpdateAt(postData),
    id: postSnapshot.id,
  };
};

// 사용자 프로필 - 글 목록
const getProfileWithPosts = async () => {};

const createPost = async postInfo => {
  const postRef = await addDoc(collection(db, COLLECTION), { ...postInfo, createAt: serverTimestamp() });

  return postRef.id;
};

const editPost = async ({ id, title, content }) => {
  await updateDoc(doc(db, COLLECTION, id), { title, content, updateAt: serverTimestamp() });
};

const removePost = async id => {
  await deleteDoc(doc(db, COLLECTION, id));
};

const togglePostLike = async ({ id, checked, userId }) => {
  await updateDoc(doc(db, COLLECTION, id), {
    like: checked ? arrayRemove(userId) : arrayUnion(userId),
  });
};

export {
  getPosts,
  getSearchedPosts,
  getMyPosts,
  getPostsByCategory,
  getPost,
  createPost,
  editPost,
  removePost,
  togglePostLike,
};
