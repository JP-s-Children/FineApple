import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
// import { collection, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// eslint-disable-next-line consistent-return
const authSignIn = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (e) {
    return { error: 'user-not-found' };
  }
};

const authSignUp = async ({ email, password, nickname, aboutMe }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: nickname });

    // const usersRef = collection(db, 'users');

    // const userRef = await setDoc(usersRef, { id: userCredential.user.uid, aboutMe });

    // console.log(userRef);
    return userCredential;
  } catch (e) {
    console.log(e);
    if (e.code === 'auth/email-already-in-use') return { error: 'duplicated-email' };
    return { error: '' };
  }
};

const authSignOut = async () => {
  await signOut(auth);
};

export { authSignIn, authSignUp, authSignOut };
