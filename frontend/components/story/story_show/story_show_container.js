import { connect } from 'react-redux';
import StoryShow from './story_show';
import {
  requestSingleStory,
  requestAllStories,
  deleteStory
} from '../../../actions/story_actions';
// import { selectSingleStory } from '../reducers/selectors';
// import { selectAllStories } from '../reducers/selectors';

const mapStateToProps = (state) => {
  debugger
  return({
    // posts: state.stories,
    user: state.session.currentUser,
    story: state.stories.currentStory
    // story: state.stories.currentStory
  });
};

const mapDispatchToProps = dispatch => {
  return {
    // requestAllStories: () => dispatch(requestAllStories()),
    requestSingleStory: id => dispatch(requestSingleStory(id)),
    destroyStory: (post) => dispatch(deleteStory(post))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);
