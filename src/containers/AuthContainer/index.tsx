import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthPage from '../../components/pages/AuthPage';
import { GetUserEmail, GetUserName, GetUserPassword } from '../../store/selectors';

const AuthContainer = () => {
  const email = useSelector(GetUserEmail);
  const password = useSelector(GetUserPassword);
  const name = useSelector(GetUserName);

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      navigate('/');
    }
  }, [email]);

  return <AuthPage />;
};

export default AuthContainer;
