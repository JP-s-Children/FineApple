import { collection, getCountFromServer, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { db } from './firebase';

const paginationQuery = async ({
  collectionName,
  pageParam,
  searchCondition,
  orderCondition = orderBy('createAt', 'desc'),
  totalPageSearchCondition,
  pageSize = 10,
}) => {
  const collectionRef = collection(db, collectionName);
  const limitPage = limit(pageSize);

  const q = pageParam
    ? query(collectionRef, searchCondition, orderCondition, startAfter(pageParam), limitPage)
    : query(collectionRef, searchCondition, orderCondition, limitPage);

  const data = await getDocs(q);

  const snapshot = await getCountFromServer(query(collectionRef, totalPageSearchCondition ?? searchCondition));

  return {
    data: specifySnapshotIntoData(data),
    totalLength: snapshot.data().count,
    nextPage: data.size === pageSize ? data.docs[data.docs.length - 1] : undefined,
  };
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

const formattedCreateAt = data => data?.createAt?.toDate();
const formattedUpdateAt = data => data?.updateAt?.toDate();

export { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt, paginationQuery };
