import * as ActionTypes from '../actionTypes';

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case ActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
