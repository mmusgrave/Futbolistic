import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_SINGLE_TOPIC = 'RECEIVE_SINGLE_TOPIC';

export const requestSingleTopic = (id) => (dispatch) => {
  debugger
  return APIUtil.fetchTopic(id).then( (topic) => {
    debugger
      return dispatch(receiveSingleTopic(topic));
      debugger
      // return story;
    });
};

export const receiveSingleTopic = topic => {
  debugger
  return {
    type: RECEIVE_SINGLE_TOPIC,
    topic
  };
};
