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
  debugger
  // let currentState = merge({}, state, nullStory);
  let currentState = merge({}, state);
  switch(action.type) {
    // case RECEIVE_SINGLE_TOPIC:
    //   debugger
    //   // currentState.currentTopic = action.topic;
    //
    //   let fakeTopic = {
    //     parent_topic: action.topic.parent_topic,
    //     topic_name: action.topic.topic_name,
    //     id: action.topic.id
    //   }
    //   debugger
    //   if (action.topic.stories){
    //     // if (action.story.comments.length > 0)
    //       fakeTopic.stories = Object.keys(action.topic.stories)
    //       debugger
    //   } else {
    //     fakeTopic.stories = []
    //     debugger
    //   }
    //   let newState = merge({}, state, {
    //     currentTopic: fakeTopic
    //   })
    //
    //
    //   return newState;
    // case RECEIVE_SINGLE_STORY:
    //   currentState.topics = action.story.tagged_topics;
    //   return currentState;
    case RECEIVE_CURRENT_USER:
    debugger
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
