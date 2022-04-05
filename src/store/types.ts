export type InfoReducerType = {
  name: string;
  email: string;
  password: string;
};

export type UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME';
  clearUserName: 'CLEAR_USER_NAME';
  setUserEmail: 'SET_USER_EMAIL';
  setUserPassword: 'SET_USER_PASSWORD';
};

export type SetUserNameActionType = {
  type: UserInfoActionTypeType['setUserName'];
  payload: string;
};
export type SetUserEmailActionType = {
  type: UserInfoActionTypeType['setUserEmail'];
  payload: string;
};
export type SetUserPasswordActionType = {
  type: UserInfoActionTypeType['setUserPassword'];
  payload: string;
};

export type ClearUserNameActionType = {
  type: UserInfoActionTypeType['clearUserName'];
};

export type ActionType =
  | SetUserNameActionType
  | SetUserEmailActionType
  | SetUserPasswordActionType
  | ClearUserNameActionType;
