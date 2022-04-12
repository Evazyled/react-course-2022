/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-indent */

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { GetUserEmail, GetUserName } from '../../store/auth/selectors';

const AuthHOC: React.FC = ({ children }) => {
  const isAuth = useSelector(GetUserEmail);
  if (isAuth) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" />;
};

export default AuthHOC;
