import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../../components/pages/RegistrationPage';
import { GetUserEmail, GetUserName, GetUserPassword } from '../../store/selectors';

const RegistrationContainer = () => {
  const email = useSelector(GetUserEmail);
  const password = useSelector(GetUserPassword);
  const name = useSelector(GetUserName);

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      navigate('/auth');
    }
  }, [email]);
  return <RegistrationPage />;
};

export default RegistrationContainer;
