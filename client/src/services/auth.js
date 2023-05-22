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
  await signInWithEmailAndPassword(auth, email, password);

  const userDocRef = doc(db, COLLECTION, email);
  const userSnapshot = await getDoc(userDocRef);
  const { nickName, firstName, lastName, level, point, avatarId } = userSnapshot.data();

  return { email, firstName, lastName, nickName, level, point, avatarId };
};

const authSignUp = async ({ email, password, firstName, lastName, nickName, country, birthDate, phoneNumber }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, COLLECTION, email), {
    nickName,
    firstName,
    lastName,
    phoneNumber,
    country,
    birthDate,
    interestCategories: [],
    avatarId: '',
    aboutMe: '',
    level: 1,
    point: 0,
  });

  return userCredential;
};

const authSignOut = async () => {
  await signOut(auth);
};

const checkDuplicatedEmail = async email => {
  if (!email) return false;

  try {
    const checkedSignInMethods = await fetchSignInMethodsForEmail(auth, email);
    return checkedSignInMethods.length > 0;
  } catch (e) {
    return false;
  }
};

const checkDuplicatedNickName = async nickName => {
  if (!nickName) return false;

  const usersRef = collection(db, COLLECTION);

  const q = query(usersRef, where('nickName', '==', nickName));
  const usersSnapshot = await getDocs(q);
  return usersSnapshot.docs.length > 0;
};

export { authSignIn, authSignUp, authSignOut, checkDuplicatedEmail, checkDuplicatedNickName };
