import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: {
    // username: [],
    // password:[],
    // first_name: [],
    // last_name: [],
    // base: []
  }
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  debugger
  let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      currentState.currentUser = action.currentUser;
      return currentState;
    case RECEIVE_ERRORS:
      currentState.errors = action.errors;
      return currentState;
    case CLEAR_ERRORS:
      currentState.errors = {};
      return currentState;
    default:
      return state;
  }
};

export default SessionReducer;
