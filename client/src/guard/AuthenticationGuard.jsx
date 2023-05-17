import React from 'react';
import Recoil from 'recoil';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import userState from '../recoil/atoms/userState';
import { auth } from '../services/firebase';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const [user, setUser] = Recoil.useRecoilState(userState);

  const setAuth = user => {
    if (!user) {
      setUser(null);
    }
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuth);
    return () => unsubscribe();
  }, []);

  return user ? element : <Navigate to={redirectTo} />;
};

export default AuthenticationGuard;
