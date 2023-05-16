import React from 'react';
import Recoil from 'recoil';
import { Navigate } from 'react-router-dom';
import userState from '../recoil/atoms/userState';
import { checkAuth } from '../services/auth';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const isLogin = checkAuth();

  const setLoginUser = Recoil.useSetRecoilState(userState);

  React.useEffect(() => {
    if (!isLogin) {
      setLoginUser(null);
    }
  }, [isLogin, setLoginUser]);

  return isLogin ? element : <Navigate to={redirectTo} />;
};

export default AuthenticationGuard;
