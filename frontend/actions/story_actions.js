import * as APIUtil from '../util/story_api_util';

export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
// export const UPDATE_STORY = 'UPDATE_STORY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const requestAllStories = () => (dispatch) => {
  return APIUtil.fetchAllStories()
    .then(stories => dispatch(receiveAllStories(stories)));
};

export const requestSingleStory = (id) => (dispatch) => {
  // dispatch(startLoadingAllStories());

  return APIUtil.fetchStory(id).then( (story) => {

      return dispatch(receiveSingleStory(story));
      //
      // return story;
    });
};


export const createStory = (story) => (dispatch) => {
    return APIUtil.createStory(story).then(story => {
      // dispatch(requestAllStories());
      return story;
    });
};


export const deleteStory = (story) => (dispatch) => {
  return APIUtil.deleteStory(story).then(story => {
    dispatch(removeStory(story));
  })
};

export const editStory = (story) => (dispatch) => {
  debugger
  return APIUtil.updateStory(story).then(story => {
    debugger
    dispatch(requestSingleStory(story.id));
    return dispatch(requestAllStories());
    // return story;
  })
};

export const receiveErrors = errors => {

  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};


export const receiveAllStories = (stories) => {
  //
  return {
    type: RECEIVE_ALL_STORIES,
    stories
  };
};

export const receiveSingleStory = story => {

  return {
    type: RECEIVE_SINGLE_STORY,
    story
  };
};


export const removeStory = story => {
  return({
    type: REMOVE_STORY,
    story
  })
};

export const updateStory = story => {
  return({
    type: UPDATE_STORY,
    story
  })
};
