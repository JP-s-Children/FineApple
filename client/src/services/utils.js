import { collection, limit, query, startAfter } from 'firebase/firestore';
import { db } from './firebase';

const PAGE_SIZE = 10;

const paginationQuery = ({ collectionName, pageParam, searchCondition }) => {
  const collectionRef = collection(db, collectionName);
  const limitPage = limit(PAGE_SIZE);

  return pageParam
    ? query(collectionRef, searchCondition, startAfter(pageParam), limitPage)
    : query(collectionRef, searchCondition, limitPage);
};
const specifySnapshotIntoData = snapshot =>
  snapshot.docs.map(doc => {
    const specifiedData = doc.data();

    return {
      ...specifiedData,
      createAt: new Date(formattedCreateAt(specifiedData)),
      updateAt: new Date(formattedUpdateAt(specifiedData)),
      id: doc.id,
    };
  });

const formattedCreateAt = data => data?.createAt.toDate();
const formattedUpdateAt = data => data?.updateAt?.toDate();

export { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt, paginationQuery };
