import merge from 'lodash/merge';
// //
import {
  // RECEIVE_ALL_COMMENTS,
  RECEIVE_SINGLE_STORY//,
//   RECEIVE_CURRENT_USER,
//   UPDATE_STORY,
//   REMOVE_STORY,
// //   CLEAR_ERRORS,
//   RECEIVE_ERRORS
} from '../actions/story_actions';
//

import {
  RECEIVE_ALL_COMMENTS,
  // RECEIVE_SINGLE_STORY//,
//   RECEIVE_CURRENT_USER,
  UPDATE_COMMENT,
  REMOVE_COMMENT//,
// //   CLEAR_ERRORS,
//   RECEIVE_ERRORS
} from '../actions/comment_actions';
const nullComment = Object.freeze({
  comments: {},
  currentComment: null//,
  // errors: {}
});
//
const CommentReducer = (state = nullComment, action) => {
  Object.freeze(state);
//   // 
let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      
      currentState.comments = action.comments;
      
      return currentState;
    case RECEIVE_SINGLE_STORY:
      
      // currentState.comments = action.story.comments;
      // return currentState;
      let newState = merge({}, state, {
        comments: action.story.comments
      });
      return newState
      // = action.story.comments.map( (comment) => {
      //   return comment.id;
      // });
      
      // return currentState;
      // case RECEIVE_ALL_STORIES:
      //   // 
      //   currentState.stories = action.stories.stories;
      //   // 
      //   return currentState;
//
    case UPDATE_COMMENT:
      
      //maybe update current user in here


      return currentState;
    case REMOVE_COMMENT:
      
      //maybe update current user in here
      // delete currentState.
      delete currentState.comments[action.comment.id];
      // currentState.stories.
      return currentState;
//
    // case RECEIVE_CURRENT_USER:
    //   
    //   // currentState.stories = action.stories;
    //   return currentState;
//     case RECEIVE_ERRORS:
//       // 
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
