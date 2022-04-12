/* eslint-disable import/prefer-default-export */
import { rootReducerType } from '../rootType';

export const GetUserName = (state: rootReducerType) => state.auth.name;
export const GetUserEmail = (state: rootReducerType) => state.auth.email;
export const GetUserPassword = (state: rootReducerType) => state.auth.password;
