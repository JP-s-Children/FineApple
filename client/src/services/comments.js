import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
  and,
} from 'firebase/firestore';
import { db } from './firebase';
import { paginationQuery } from './utils';

const COLLECTION = 'comments';

const getAdoptedComment = async ({ postId }) => {
  const q = query(collection(db, COLLECTION), and(where('postId', '==', postId), where('adopted', '==', true)));

  const commentSnapshot = await getDocs(q);

  return commentSnapshot;
};

const getComments = async ({ postId, pageParam }) => {
  const { data, nextPage, totalLength } = await paginationQuery({
    pageParam,
    collectionName: COLLECTION,
    searchCondition: and(where('postId', '==', postId), where('adopted', '==', false)),
    totalPageSearchCondition: where('postId', '==', postId),
  });

  return {
    comments: data,
    nextPage,
    totalLength,
  };
};

const createComment = async commentInfo => {
  const commentRef = addDoc(collection(db, COLLECTION), { commentInfo, createAt: serverTimestamp() });

  return commentRef.id;
};

const editComment = async ({ id, content }) => {
  await updateDoc(doc(db, COLLECTION, id), { content, updateAt: serverTimestamp() });
};

const toggleAdopted = async ({ id, adopted }) => {
  await updateDoc(doc(db, COLLECTION, id), { adopted });
};

const toggleCommentLike = async ({ id, checked, userId }) => {
  await updateDoc(doc(db, COLLECTION, id), {
    like: checked ? arrayRemove(userId) : arrayUnion(userId),
  });
};

const removeComment = async ({ id }) => {
  await deleteDoc(doc(db, COLLECTION, id));
};

export { getComments, getAdoptedComment, createComment, editComment, removeComment, toggleAdopted, toggleCommentLike };
