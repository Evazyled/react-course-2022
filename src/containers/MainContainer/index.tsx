import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from '../../components/pages/MainPage';
import makeRequest from '../../network';
import { GetUsersAction } from '../../store/users/action';
import { getUsers } from '../../store/users/selectors';

const MainContainer = () => {
  const userData = useSelector(getUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsersAction());
  }, []);
  return <MainPage userData={userData} />;
};

export default MainContainer;
