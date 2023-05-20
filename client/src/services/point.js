import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'users';

const calcLevel = point => Math.floor(point / 100) + 1;

const addPoints = async ({ email, points }) => {
  try {
    const userDocRef = doc(db, COLLECTION, email);
    const userSnapshot = await getDoc(userDocRef);
    const { point } = userSnapshot.data();

    await updateDoc(userDocRef, { level: calcLevel(point + points), point: point + points });
  } catch (e) {
    console.error(e);
  }
};

const deductPoints = async ({ email, points }) => {
  try {
    const userDocRef = doc(db, COLLECTION, email);
    const userSnapshot = await getDoc(userDocRef);
    const { point } = userSnapshot.data();

    await updateDoc(userDocRef, { level: calcLevel(point - points), point: point - points });
  } catch (e) {
    console.error(e);
  }
};

export { addPoints, deductPoints };
