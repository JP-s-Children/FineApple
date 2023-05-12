import React from 'react';
import Recoil from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { auth } from '../api/auth';
import userState from '../recoil/atoms/userState';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const { isFetched, error } = useQuery({
    queryKey: ['isAuthenticated'],
    queryFn: auth,
    retry: false,
    staleTime: 1000,
  });

  const setLoginUser = Recoil.useSetRecoilState(userState);

  React.useEffect(() => {
    if (isFetched && error) {
      setLoginUser(null);
    }
  }, [error, isFetched, setLoginUser]);

  return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
