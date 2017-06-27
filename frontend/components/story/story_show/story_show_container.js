import { connect } from 'react-redux';
import StoryShow from './story_show';
import {
  requestSingleStory,
  requestAllStories
} from '../../../actions/story_actions';
// import { selectSingleStory } from '../reducers/selectors';
// import { selectAllStories } from '../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    // posts: state.posts.posts,
    // post: state.posts.posts[state.posts.currentStory]
  });
};

const mapDispatchToProps = dispatch => {
  return {
    // requestAllStories: () => dispatch(requestAllStories()),
    // requestSingleStory: post => dispatch(requestSingleStory(post))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);
