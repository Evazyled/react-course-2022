import { useParams } from 'react-router-dom';
/* eslint-disable import/prefer-default-export */
import makeRequest from '../../network';
import { UsersActionsTypeType } from './type';

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

export const GetOneUserAction = () => async (dispatch: any) => {
  const params = useParams();
  const data = await makeRequest({ url: `/${params.id}` });
  dispatch({
    type: UsersActionsType.getOneUser,
    payload: data.info,
  });
};
