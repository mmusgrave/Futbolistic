import { connect } from 'react-redux';
import SubscriptionFeed from './subscription_feed';
// import {
//   requestSingleTopic
// } from '../../actions/topic_actions';

const mapStateToProps = (state) => {
//   debugger
//   let relevantStories = {};
//   if (state.topics.currentTopic && state.topics.currentTopic.stories.length > 0){
//     state.topics.currentTopic.stories.forEach( (id) => {
//       relevantStories[parseInt(id)] = state.stories.stories[parseInt(id)];
//     });
//   }
  debugger
  return({
    stories: state.session.currentUser.subscribed_stories//,
    // stories: state.session.currentUser.subscribed_stories,

  })
//   // stories: selectAllStories(state)
};

const mapDispatchToProps = dispatch => {
  return {
//     requestSingleTopic: (id) => dispatch(requestSingleTopic(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionFeed);
