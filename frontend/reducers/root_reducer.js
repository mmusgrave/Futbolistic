import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoryReducer from './story_reducer';
import CommentReducer from './comment_reducer';
import TopicReducer from './topic_reducer';
import SubscriptionReducer from './subscription_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer,
  comments: CommentReducer,
  topics: TopicReducer,
  subscription: SubscriptionReducer
});

export default RootReducer;
