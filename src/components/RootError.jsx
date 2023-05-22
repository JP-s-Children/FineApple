import React from 'react';
import Recoil from 'recoil';
import { Navigate, useRouteError } from 'react-router-dom';
import { SIGNIN_PATH } from '../constants/routes';
import userState from '../recoil/atoms/userState';

const RootError = () => {
  const error = useRouteError();

  const setUser = Recoil.useSetRecoilState(userState);

  React.useEffect(() => {
    setUser(null);
  }, [setUser]);

  if (error) {
    if (error.name === 'InvalidAuthError') {
      return <Navigate to={SIGNIN_PATH} />;
    }
  }

  return <Navigate to="/*" />;
};

export default RootError;
