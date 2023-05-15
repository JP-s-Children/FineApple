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

export { specifySnapshotIntoData, formattedCreateAt, formattedUpdateAt };
