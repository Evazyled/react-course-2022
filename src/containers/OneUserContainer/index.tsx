import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneUserPage from '../../components/pages/OneUserPage';
import { GetOneUserAction } from '../../store/users/action';
import { getOneUser } from '../../store/users/selectors';

const OneUserContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOneUserAction());
  });
  const user = useSelector(getOneUser);

  return <OneUserPage userInfo={user} />;
};

export default OneUserContainer;
