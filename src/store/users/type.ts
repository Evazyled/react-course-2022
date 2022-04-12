export type UsersActionsTypeType = {
  getUsers: 'GET_USERS';
  getOneUser: 'GET_ONE_USER';
};

export type UserReducerType = {
  data: any[];
  dataOne: any;
};

export type GetUsersActionType = {
  type: UsersActionsTypeType['getUsers'];
  payload: any[];
};

export type GetOneUserActionType = {
  type: UsersActionsTypeType['getOneUser'];
  payload: any;
};

export type ActionType = GetUsersActionType | GetOneUserActionType;
