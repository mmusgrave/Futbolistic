import merge from 'lodash/merge';
//
import {
  RECEIVE_CURRENT_USER,
//   CLEAR_ERRORS,
  RECEIVE_ERRORS
} from '../actions/session_actions';
//
const nullStory = Object.freeze({
  stories: {},
  currentStory: {}//,
  // errors: {}
});

const StoryReducer = (state = nullStory, action) => {
  Object.freeze(state);
  // debugger
  let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      // currentState.stories = action.stories;
      return currentState;
    case RECEIVE_ERRORS:
      debugger
      //currentState.errors = action.errors;
      return currentState;
    // case CLEAR_ERRORS:
    //   currentState.errors = {};
    //   return currentState;
    default:
      return state;
  }
};

export default StoryReducer;
