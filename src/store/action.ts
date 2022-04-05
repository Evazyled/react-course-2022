import { initialState } from './reducer';
import { UserInfoActionTypeType } from './types';

/* eslint-disable import/prefer-default-export */
export const UserInfoActionType: UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME',
  setUserEmail: 'SET_USER_EMAIL',
  setUserPassword: 'SET_USER_PASSWORD',
  clearUserName: 'CLEAR_USER_NAME',
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionType.setUserName,
  payload: name,
});
export const SetUserEmailAction = (email: string) => ({
  type: UserInfoActionType.setUserEmail,
  payload: email,
});
export const SetUserPasswordAction = (password: string) => ({
  type: UserInfoActionType.setUserPassword,
  payload: password,
});

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName,
});
