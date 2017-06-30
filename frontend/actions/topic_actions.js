import * as APIUtil from '../util/topic_api_util';

export const RECEIVE_SINGLE_TOPIC = 'RECEIVE_SINGLE_TOPIC';

export const requestSingleTopic = (id) => (dispatch) => {
  
  return APIUtil.fetchTopic(id).then( (topic) => {
    
      return dispatch(receiveSingleTopic(topic));
      
      // return story;
    });
};

export const receiveSingleTopic = topic => {
  
  return {
    type: RECEIVE_SINGLE_TOPIC,
    topic
  };
};
