import {
  getFirestore,
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
} from 'firebase/firestore';
import app from './app';
import { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt } from './utils';

const db = getFirestore(app);
const COLLECTION = 'comments';

const getComments = async ({ postId }) => {
  const commentRef = collection(db, 'comments');
  const q = query(commentRef, where('postId', '==', postId));

  const commentSnapshot = await getDocs(q);

  return commentSnapshot.docs.map(comment => {
    const commentData = comment.data();

    return {
      ...commentData,
      createAt: new Date(formattedCreateAt(commentData)),
      updateAt: new Date(formattedUpdateAt(commentData)),
      id: comment.id,
    };
  });
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

export { getComments, createComment, editComment, removeComment, toggleAdopted, toggleCommentLike };
