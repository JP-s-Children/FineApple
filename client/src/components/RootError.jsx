import React from 'react';
import Recoil from 'recoil';
import { Navigate, useRouteError } from 'react-router-dom';
import { SIGNIN_PATH } from '../routes/routePaths';
import userState from '../recoil/atoms/userState';

const RootError = () => {
  const error = useRouteError();
  const setUser = Recoil.useSetRecoilState(userState);

  if (error.response.status === 403) {
    setUser(null);

    return <Navigate to={SIGNIN_PATH} />;
  }

  return <Navigate to="*" />;
};

export default RootError;
