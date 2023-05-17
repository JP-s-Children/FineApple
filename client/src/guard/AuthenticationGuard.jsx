import React from 'react';
import Recoil from 'recoil';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import userState from '../recoil/atoms/userState';
import { auth } from '../services/firebase';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const [loginUser, setLoginUser] = Recoil.useRecoilState(userState);
  const [isLoading, setLoading] = React.useState(true);

  const setAuth = user => {
    setLoading(false);
    if (!user) setLoginUser(null);
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuth);
    return () => unsubscribe();
  }, []);

  if (!loginUser) return <Navigate to={redirectTo} />;
  return isLoading ? null : loginUser ? element : <Navigate to={redirectTo} />;
};

export default AuthenticationGuard;
