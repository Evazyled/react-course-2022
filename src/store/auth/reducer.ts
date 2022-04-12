import { UserInfoActionType } from './action';
import { ActionType, InfoReducerType } from './types';

export const initialState: InfoReducerType = {
  name: '',
  email: '',
  password: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload,
      };
    case UserInfoActionType.setUserEmail:
      return {
        ...state,
        email: action.payload,
      };
    case UserInfoActionType.setUserPassword:
      return {
        ...state,
        password: action.payload,
      };
    case UserInfoActionType.clearUserName:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
