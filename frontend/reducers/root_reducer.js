import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoryReducer from './story_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer
});

export default RootReducer;
