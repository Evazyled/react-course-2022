import { UsersActionsType } from './action';
import { ActionType, UserReducerType } from './type';

export const initialState: UserReducerType = {
  data: [],
  dataOne: {},
};

const usersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UsersActionsType.getUsers:
      return {
        ...state,
        data: action.payload,
      };
    case UsersActionsType.getOneUser:
      return {
        ...state,
        dataOne: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
