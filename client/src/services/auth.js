import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { auth, db } from './firebase';

const COLLECTION = 'users';

const authSignIn = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    const userDocRef = doc(db, 'users', email);
    const userSnapshot = await getDoc(userDocRef);
    const { nickName, firstName, lastName, level, point, avatarId } = userSnapshot.data();

    return { email, firstName, lastName, nickName, level, point, avatarId };
  } catch (e) {
    return { error: 'user-not-found' };
  }
};

const authSignUp = async ({ email, password, firstName, lastName, nickName, country, birthDate, phoneNumber }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // await updateProfile(auth.currentUser, { displayName: nickname, phoneNumber });

    await setDoc(doc(db, COLLECTION, email), {
      nickName,
      firstName,
      lastName,
      phoneNumber,
      country,
      birthDate,
      interestedCategory: [],
      avatarId: '',
      aboutMe: '',
      level: 1,
      point: 0,
    });

    return userCredential;
  } catch (e) {
    console.log(e);
    if (e.code === 'auth/email-already-in-use') return { error: 'duplicated-email' };
    return { error: 'error' };
  }
};

const authSignOut = async () => {
  // console.log(auth.currentUser);
  await signOut(auth);
};

const checkDuplicatedEmail = async email => {
  const checkedSignInMethods = await fetchSignInMethodsForEmail(auth, email);
  return checkedSignInMethods.length > 0;
};

const checkDuplicatedNickName = async nickName => {
  const usersRef = collection(db, COLLECTION);

  const q = query(usersRef, where('nickName', '==', nickName));
  const usersSnapshot = await getDocs(q);
  return usersSnapshot.docs.length > 0;
};

export { authSignIn, authSignUp, authSignOut, checkDuplicatedEmail, checkDuplicatedNickName };
