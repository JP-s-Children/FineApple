import { collection, doc, getDoc, getDocs, limit, orderBy, query, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'users';

const getProfile = async email => {
  console.log(email);
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

const getUserRanking = async ({ topCount }) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('point', 'desc'), limit(topCount));
    const usersSnapshot = await getDocs(q);
    const userRanking = usersSnapshot.docs.map(user => user.data());

    return userRanking;
  } catch (e) {
    console.log(e);
    return { error: '' };
  }
};

export { getProfile, getMyProfile, editMyProfile, getUserRanking };
