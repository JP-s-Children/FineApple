import {
  collection,
  doc,
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
  or,
  orderBy,
  getCountFromServer,
} from 'firebase/firestore';
import { db } from './firebase';
import { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt, paginationQuery } from './utils';

const COLLECTION = 'posts';
const PAGE_SIZE = 10;

const addCommentsLengthListInPosts = async posts => {
  const postIds = posts.map(post => post.id);
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

  return posts.map(item => ({ ...item, commentsLength: commentsLength[item.id] }));
};

const getPosts = async ({ pageParam }) => {
  const q = pageParam
    ? query(collection(db, COLLECTION), startAfter(pageParam), limit(PAGE_SIZE))
    : query(collection(db, COLLECTION), limit(PAGE_SIZE));

  const postSnapshot = await getDocs(q);

  return postSnapshot;
};

const getPostsByCategory = async ({ category = '', subCategory = '', pageParam }) => {
  const {
    data: posts,
    totalLength,
    nextPage,
  } = await paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: subCategory
      ? and(where('category', '==', category), where('subCategory', '==', subCategory))
      : where('category', '==', category),
  });

  return { posts: await addCommentsLengthListInPosts(posts), totalLength, nextPage };
};

const getSearchedPosts = async ({ keyword = '', category = '', subCategory = '', isRouteHome }) => {
  const postsRef = collection(db, COLLECTION);

  const customizeQuery = searchCondition => query(postsRef, searchCondition, orderBy('createAt', 'desc'));

  const qInHome =
    category === '' && subCategory === ''
      ? query(postsRef, orderBy('createAt', 'desc'))
      : customizeQuery(or(where('category', '==', category), where('subCategory', '==', subCategory)));

  const qInCategoryRoute =
    category === '' && subCategory === ''
      ? query(postsRef, orderBy('createAt', 'desc'))
      : subCategory !== ''
      ? customizeQuery(and(where('category', '==', category), where('subCategory', '==', subCategory)))
      : customizeQuery(or(where('category', '==', category), where('subCategory', '==', subCategory)));

  const q = isRouteHome ? qInHome : qInCategoryRoute;

  const filteredPostSnapshot = await getDocs(q);

  const searchedPosts = specifySnapshotIntoData(filteredPostSnapshot)
    .filter(({ title }) => new RegExp(keyword, 'i').test(title))
    .slice(0, 5);

  return searchedPosts;
};

const getPopularPostsByCategory = async ({ category }) => {
  const { data: posts } = await paginationQuery({
    collectionName: COLLECTION,
    searchCondition: where('category', '==', category),
  });

  const postsWithCommentsLengthList = await addCommentsLengthListInPosts(posts);
  return {
    posts: postsWithCommentsLengthList.sort((prevPost, currPost) => currPost.like.length - prevPost.like.length),
  };
};

const getMyPosts = async ({ author, pageParam }) => {
  const { data, totalLength, nextPage } = await paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: where('author', '==', author),
  });

  return { posts: await addCommentsLengthListInPosts(data), totalLength, nextPage };
};

// 사용자 프로필 - 글 목록
const getProfileWithPosts = async ({ author, pageParam }) => {
  const { data, totalLength, nextPage } = paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: where('author', '==', author),
  });

  return { posts: await addCommentsLengthListInPosts(data), totalLength, nextPage };
};

// Todo: Loader 적용 고려
const getMyLikePosts = async ({ author, pageParam }) => {
  const { data, totalLength, nextPage } = paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    searchCondition: where('like', 'array-contains', author),
  });
  console.log(data);
  return { posts: await addCommentsLengthListInPosts(data), totalLength, nextPage };
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

const createPost = async postInfo => {
  const postRef = await addDoc(collection(db, COLLECTION), {
    ...postInfo,
    images: [],
    like: [],
    completed: false,
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  });

  return postRef.id;
};

const editPost = async ({ id, title, content }) => {
  await updateDoc(doc(db, COLLECTION, id), { title, content, updateAt: serverTimestamp() });
};

const removePost = async ({ id }) => {
  await deleteDoc(doc(db, COLLECTION, id));
};

const togglePostCompleted = async ({ id, completed }) => {
  await updateDoc(doc(db, COLLECTION, id), { completed });
};

const togglePostLike = async ({ id, checked, userId }) => {
  await updateDoc(doc(db, COLLECTION, id), { like: checked ? arrayUnion(userId) : arrayRemove(userId) });
};

export {
  getPosts,
  getPostsByCategory,
  getSearchedPosts,
  getPopularPostsByCategory,
  getMyPosts,
  getProfileWithPosts,
  getMyLikePosts,
  getPost,
  createPost,
  editPost,
  removePost,
  togglePostLike,
  togglePostCompleted,
};
