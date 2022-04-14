import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneUserPage from '../../components/pages/OneUserPage';
import { GetOneUserAction, GetUsersAction } from '../../store/users/action';
import { getOneUser } from '../../store/users/selectors';

const OneUserContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetOneUserAction(id));
  }, [id]);

  const user = useSelector(getOneUser);

  return <OneUserPage userInfo={user} />;
};

export default OneUserContainer;
