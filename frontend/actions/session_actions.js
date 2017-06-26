import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => {
  debugger
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  });
};

export const receiveErrors = errors => {

  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS
  });
};

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => {
    return dispatch(receiveErrors(err.responseJSON));
  })
);

export const login = user => dispatch => {
  debugger
  return APIUtil.login(user).then(user => {
    debugger
    dispatch(receiveCurrentUser(user));
    return user;
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  })
};

export const logout = () => dispatch => {
  debugger
  APIUtil.logout().then(user => {
    debugger
    return dispatch(receiveCurrentUser(null))
  })

};
