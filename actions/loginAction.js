import * as ActionTypes from '../actionTypes';

import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGIN_LOADING });

    const config = { headers: { 'content-type': 'application/json' } };

    const { data } = await axios.post('', { email, password }, config);

    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data });
  } catch (error) {}
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_ERROR });
};
