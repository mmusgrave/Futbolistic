import merge from 'lodash/merge';
// //
import {
  RECEIVE_ALL_COMMENTS//,
//   RECEIVE_SINGLE_STORY,
//   RECEIVE_CURRENT_USER,
//   UPDATE_STORY,
//   REMOVE_STORY,
// //   CLEAR_ERRORS,
//   RECEIVE_ERRORS
} from '../actions/comment_actions';
//
const nullComment = Object.freeze({
  comments: {},
  currentComment: null//,
  // errors: {}
});
//
const CommentReducer = (state = nullComment, action) => {
  Object.freeze(state);
//   // debugger
  let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      debugger
      currentState.comments = action.comments.comments;
      debugger
      return currentState;
//     case RECEIVE_SINGLE_STORY:
//       debugger
//       currentState.currentStory = action.story;
//       debugger
//       return currentState;
//
//     case UPDATE_STORY:
//       debugger
//       //maybe update current user in here
//
//
//       return currentState;
//     case REMOVE_STORY:
//       debugger
//       //maybe update current user in here
//       delete currentState.stories[action.story.id];
//       // currentState.stories.
//       return currentState;
//
//       return currentState;
//     case RECEIVE_CURRENT_USER:
//       // debugger
//       // currentState.stories = action.stories;
//       return currentState;
//     case RECEIVE_ERRORS:
//       // debugger
//       //currentState.errors = action.errors;
//       return currentState;
//     // case CLEAR_ERRORS:
//     //   currentState.errors = {};
//     //   return currentState;
    default:
      return state;
  }
};
//
export default CommentReducer;
