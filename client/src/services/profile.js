// import {
//   getDocs,
//   collection,
//   addDoc,
//   query,
//   where,
//   doc,
//   updateDoc,
//   deleteDoc,
//   serverTimestamp,
//   arrayRemove,
//   arrayUnion,
//   getDoc,
// } from 'firebase/firestore';

import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'users';

const getMyProfile = async ({ email }) => {
  // TODO: check auth

  // console.log('ㅠㅠ', auth.currentUser);

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
      interestedCategory,
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
      interestedCategory,
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

const getProfile = async email => {
  console.log(email);
};

export { getMyProfile, getProfile };
