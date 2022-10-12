import * as ActionTypes from '../actionTypes';

export const login = (email, password) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_LOADING });

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: data })
    )
    .catch((error) => console.log(error));
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: ActionTypes.CLEAR_ERROR });
};
