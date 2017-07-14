import merge from 'lodash/merge';
// //
import {

  RECEIVE_SINGLE_STORY
} from '../actions/story_actions';
//

import {
  RECEIVE_ALL_COMMENTS,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
const nullComment = Object.freeze({
  comments: {},
  currentComment: null
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
      let newState = merge({}, state, {
        comments: action.story.comments
      });
      return newState
    case UPDATE_COMMENT:



      return currentState;
    case REMOVE_COMMENT:
      delete currentState.comments[action.comment.id];

      return currentState;
    default:
      return state;
  }
};
//
export default CommentReducer;
