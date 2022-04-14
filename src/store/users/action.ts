import { Dispatch } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable import/prefer-default-export */
import makeRequest from '../../network';
import { ActionType, UsersActionsTypeType } from './type';

export const UsersActionsType: UsersActionsTypeType = {
  getUsers: 'GET_USERS',
  getOneUser: 'GET_ONE_USER',
};

export const GetUsersAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character' });
  dispatch({
    type: UsersActionsType.getUsers,
    payload: data.results,
  });
};

type UserParams = {
  id: string;
};

export const GetOneUserAction = (id: any) => async (dispatch: Dispatch<ActionType>) => {
  const data = await makeRequest({
    url: `/character/${id}`,
  });
  console.log('ff');

  dispatch({
    type: UsersActionsType.getOneUser,
    payload: data,
  });
};
