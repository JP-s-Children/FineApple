import { collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { db } from './firebase';
import { paginationQuery } from './utils';

const COLLECTION = 'users';

const getProfileByEmail = async ({ email }) => {
  const userDocRef = doc(db, COLLECTION, email);
  const userSnapshot = await getDoc(userDocRef);

  const { country, nickName, aboutMe, interestCategories, avatarId, level, point } = userSnapshot.data();

  return {
    email,
    nickName,
    country,
    aboutMe,
    interestCategories,
    avatarId,
    level,
    point,
  };
};

const getProfileByNickName = async ({ nickName }) => {
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('nickName', '==', nickName));
  const usersSnapshot = await getDocs(q);

  const { country, aboutMe, interestCategories, avatarId, level, point } = usersSnapshot.docs[0].data();

  return {
    email: usersSnapshot.docs[0].id,
    nickName,
    country,
    aboutMe,
    interestCategories,
    avatarId,
    level,
    point,
  };
};

const getMyProfile = async ({ email }) => {
  try {
    const userDocRef = doc(db, COLLECTION, email);
    const userSnapshot = await getDoc(userDocRef);
    const {
      aboutMe,
      nickName,
      birthDate,
      country,
      firstName,
      lastName,
      interestCategories,
      level,
      point,
      phoneNumber,
      avatarId,
    } = userSnapshot.data();

    return {
      email,
      nickName,
      name: lastName + firstName,
      phoneNumber,
      country,
      birthDate: birthDate.toDate(),
      aboutMe,
      interestCategories,
      avatarId,
      level,
      point,
    };
  } catch (e) {
    console.error(e);
    // TODO: error
    return { error: '' };
  }
};

const editMyProfile = async ({ userInfo: { email, ...userInfo } }) => {
  try {
    await updateDoc(doc(db, COLLECTION, email), userInfo);
  } catch (e) {
    console.log(e);
  }
};

const getUserRanking = async ({ pageParam }) => {
  const { data, nextPage, totalLength } = await paginationQuery({
    collectionName: COLLECTION,
    pageParam,
    orderCondition: orderBy('point', 'desc'),
  });

  return {
    users: data,
    nextPage,
    totalLength,
  };
};

export { getProfileByEmail, getProfileByNickName, getMyProfile, editMyProfile, getUserRanking };
