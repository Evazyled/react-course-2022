import { rootReducerType } from '../rootType';

const getUsers = (state: rootReducerType) => state.users.data;
export default getUsers;

export const getOneUser = (state: rootReducerType) => state.users.dataOne;
