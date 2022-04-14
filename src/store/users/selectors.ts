import { rootReducerType } from '../rootType';

export const getUsers = (state: rootReducerType) => state.users.data;

export const getOneUser = (state: rootReducerType) => state.users.dataOne;
