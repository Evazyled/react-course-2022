/* eslint-disable import/prefer-default-export */
import { InfoReducerType } from './types';

export const GetUserName = (state: InfoReducerType) => state.name;
export const GetUserEmail = (state: InfoReducerType) => state.email;
export const GetUserPassword = (state: InfoReducerType) => state.password;
