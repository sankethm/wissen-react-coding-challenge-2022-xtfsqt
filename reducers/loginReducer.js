import * as ActionTypes from '../actionTypes';

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_LOADING:
      return {
        loading: true,
        isAuthenticated: false,
        error: null,
        token: '',
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case ActionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
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
