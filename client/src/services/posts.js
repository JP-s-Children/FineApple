import {
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
  orderBy,
  getCountFromServer,
} from 'firebase/firestore';
import { db } from './firebase';
import { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt, paginationQuery } from './utils';

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

const getPostsByCategory = async ({ category = '', subCategory = '', pageParam }) => {
  const { data, nextPage } = await paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: subCategory
      ? and(where('category', '==', category), where('subCategory', '==', subCategory))
      : where('category', '==', category),
  });

  const postIds = data.map(data => data.id);
  const commentsRef = collection(db, 'comments');

  const commentsLengthList = await Promise.all(
    postIds.map(async postId => {
      const snapshot = await getCountFromServer(query(commentsRef, where('postId', '==', postId)));
      return {
        [postId]: snapshot.data().count,
      };
    })
  );

  const commentsLength = commentsLengthList.reduce((prev, curr) => ({ ...prev, ...curr }), {});

  return {
    posts: data.map(item => ({ ...item, commentsLength: commentsLength[item.id] })),
    nextPage,
  };
};

const getSearchedPosts = async ({ keyword = '', category = '', subCategory = '' }) => {
  const postsRef = collection(db, COLLECTION);

  const q =
    category === '' && subCategory === ''
      ? query(postsRef, orderBy('createAt', 'desc'))
      : query(
          postsRef,
          or(where('category', '==', category), where('subCategory', '==', subCategory)),
          orderBy('createAt', 'desc'),
          limit(5)
        );

  const filteredPostSnapshot = await getDocs(q);

  const searchedPosts = specifySnapshotIntoData(filteredPostSnapshot).filter(({ title }) =>
    new RegExp(keyword, 'i').test(title)
  );

  return searchedPosts;
};

// 내가 작성한 글 목록 :auth 정보 필요
const getMyPosts = async ({ author, pageParam }) => {
  const { data, nextPage } = await paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: where('author', '==', author),
  });

  return {
    posts: data,
    nextPage,
  };
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
