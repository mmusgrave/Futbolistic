import * as APIUtil from '../util/session_api_util';
import {requestAllStories} from './story_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => {
  //
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
  //
  return APIUtil.login(user).then(user => {
    //
    dispatch(receiveCurrentUser(user));
    return user;
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
// export const login = user => dispatch => {
//
//   return APIUtil.login(user).then(user => {
//
//     dispatch(receiveCurrentUser(user).then( (user) => {
//       dispatch(requestAllStories());
//       return user;
//     }));
//   }, err => {
//     return dispatch(receiveErrors(err.responseJSON));
//   });
// };

export const logout = () => dispatch => {
  //
  APIUtil.logout().then(user => {
    //
    return dispatch(receiveCurrentUser(null));
  });

};
