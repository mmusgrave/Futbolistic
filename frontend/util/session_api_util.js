import {
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

export const login = user => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
};

export const signup = user => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
