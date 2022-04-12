import { InfoReducerType } from './auth/types';
import { UserReducerType } from './users/type';

export type rootReducerType = {
  auth: InfoReducerType;
  users: UserReducerType;
};
