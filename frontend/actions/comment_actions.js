import * as APIUtil from '../util/comment_api_util';
import { requestSingleStory } from './story_actions';
//
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
// export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

//
export const requestAllComments = () => (dispatch) => {
  return APIUtil.fetchAllComments()
    .then(comments => dispatch(receiveAllComments(comments)));
};
//
// export const requestSingleStory = (id) => (dispatch) => {
//   // dispatch(startLoadingAllStories());
//   debugger
//   return APIUtil.fetchStory(id).then( (story) => {
//     debugger
//       dispatch(receiveSingleStory(story));
//       return story;
//     });
// };
//
//
export const createComment = (comment) => (dispatch) => {
    return APIUtil.createComment(comment).then(comment => {
      // dispatch(requestSingleComment(comment.id));
      debugger
      return dispatch(requestSingleStory(comment.story.id));
      // return comment;
    });
};
//
//
export const deleteComment = (comment) => (dispatch) => {
  return APIUtil.deleteComment(comment).then(comment => {
    return dispatch(removeComment(comment));
  })
};
//
export const editComment = (comment) => (dispatch) => {
  debugger
  return APIUtil.updateComment(comment).then(comment => {
    debugger
    // return dispatch(requestSingleComment(comment.id));
    return dispatch(requestSingleStory(comment.story.id));
    // return dispatch(requestAllComments());
    // return comment;
  })
};
//
// export const receiveErrors = errors => {
//
//   return ({
//     type: RECEIVE_ERRORS,
//     errors
//   });
// };
//
//
export const receiveAllComments = (comments) => {
  // debugger
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};
//
// export const receiveSingleStory = story => {
//   debugger
//   return {
//     type: RECEIVE_SINGLE_STORY,
//     story,
//   };
// };
//
//
export const removeComment = comment => {
  return({
    type: REMOVE_COMMENT,
    comment
  })
};
//
export const updateComment = comment => {
  return({
    type: UPDATE_COMMENT,
    comment
  })
};
