import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_TOPIC
} from '../actions/topic_actions';
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
  RECEIVE_SINGLE_STORY
} from '../actions/story_actions';

//
const nullFeed = Object.freeze({
  stories: {},
  topics: {}

});

const SubscriptionReducer = (state = nullFeed, action) => {
  Object.freeze(state);

  let currentState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:

      if (action.currentUser){
        currentState.topics = action.currentUser.subscribed_topics;
        currentState.stories = action.currentUser.subscribed_stories;
      }
      return currentState;
    default:
      return state;
  }
};

export default SubscriptionReducer;
