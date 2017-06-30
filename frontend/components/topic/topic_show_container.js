import { connect } from 'react-redux';
import TopicShow from './topic_show';
import {
  requestSingleTopic
} from '../../actions/topic_actions';

const mapStateToProps = (state) => {

  let relevantStories = {};
  if (state.topics.currentTopic && state.topics.currentTopic.stories.length > 0){
    debugger
    state.topics.currentTopic.stories.forEach( (id) => {
      relevantStories[parseInt(id)] = state.stories.stories[parseInt(id)];
    });
  }

  return({
    currentTopic: state.topics.currentTopic,
    topics: state.topics.topics,
    stories: relevantStories
  })
  // stories: selectAllStories(state)
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleTopic: (id) => dispatch(requestSingleTopic(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicShow);
