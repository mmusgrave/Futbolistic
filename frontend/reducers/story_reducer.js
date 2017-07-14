import merge from 'lodash/merge';
//
import {
  RECEIVE_ALL_STORIES,
  RECEIVE_SINGLE_STORY,
  RECEIVE_CURRENT_USER,
  UPDATE_STORY,
  REMOVE_STORY,
  RECEIVE_ERRORS
} from '../actions/story_actions';
import {
  REMOVE_COMMENT
} from '../actions/comment_actions';
//

import { RECEIVE_SINGLE_TOPIC } from '../actions/topic_actions';
const nullStory = Object.freeze({
  stories: {},
  currentStory: null
});

const StoryReducer = (state = nullStory, action) => {
  Object.freeze(state);
  //

  let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_STORIES:
      //
      currentState.stories = action.stories.stories;
      currentState.currentStory = null;
      //
      return currentState;
    case RECEIVE_SINGLE_TOPIC:

      return merge({}, state, { stories: action.topic.stories });
    case RECEIVE_SINGLE_STORY:

      let fakeStory = {
        author: action.story.author,
        title: action.story.title,
        body: action.story.body,
        id: action.story.id,
        image_url: action.story.image_url
      }

      if (action.story.comments){
        // if (action.story.comments.length > 0)
          fakeStory.comments = Object.keys(action.story.comments)

      } else {
        fakeStory.comments = []

      }
      let newState = merge({}, state, {
        currentStory: fakeStory
      })

      return newState;

    case UPDATE_STORY:

      //maybe update current user in here


      return currentState;
    case REMOVE_STORY:

      delete currentState.stories[action.story.id];
      return currentState;
    case REMOVE_COMMENT:


      const commentIndex = currentState.currentStory.comments.indexOf(action.comment.id.toString());
      let newCommentsArray1 = currentState.currentStory.comments.slice(0, commentIndex);
      let newCommentsArray2 = currentState.currentStory.comments.slice(commentIndex+1);
      let newCommentsArray = newCommentsArray1.concat(newCommentsArray2);
      currentState.currentStory.comments = newCommentsArray;
      currentState.stories[action.comment.id] = action.comment;
      return currentState;


    // case RECEIVE_COMMENTS:
    //
    //   return currentState;
    // case RECEIVE_CURRENT_USER:
    //
    //   // currentState.stories = action.stories;
    //   return currentState;
    // case RECEIVE_ERRORS:
    // // get stuff from their feeds
    //
    //   //
    //   //currentState.errors = action.errors;
    //   return currentState;
    // // case CLEAR_ERRORS:
    // //   currentState.errors = {};
    // //   return currentState;
    default:
      return state;
  }
};

export default StoryReducer;
