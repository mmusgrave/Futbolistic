import * as APIUtil from '../util/comment_api_util';
//
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
// export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';
// export const REMOVE_STORY = 'REMOVE_STORY';
// // export const UPDATE_STORY = 'UPDATE_STORY';
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
// export const createStory = (story) => (dispatch) => {
//     return APIUtil.createStory(story).then(story => {
//       // dispatch(requestAllStories());
//       return story;
//     });
// };
//
//
// export const deleteStory = (story) => (dispatch) => {
//   return APIUtil.deleteStory(story).then(story => {
//     dispatch(removeStory(story));
//   })
// };
//
// export const editStory = (story) => (dispatch) => {
//   debugger
//   return APIUtil.updateStory(story).then(story => {
//     debugger
//     dispatch(requestSingleStory(story.id));
//     return dispatch(requestAllStories());
//     // return story;
//   })
// };
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
// export const removeStory = story => {
//   return({
//     type: REMOVE_STORY,
//     story
//   })
// };
//
// export const updateStory = story => {
//   return({
//     type: UPDATE_STORY,
//     story
//   })
// };
