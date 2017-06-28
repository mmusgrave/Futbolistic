import { connect } from 'react-redux';
import StoryEdit from './story_edit';
import {
  requestAllStories,
  requestSingleStory,
  editStory
} from '../../../actions/story_actions';

const mapStateToProps = (state) => {
  debugger
  return({
    // stories: state.stories.stories,
    story: state.stories.currentStory,
    updated: false
  });
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllStories: () => dispatch(requestAllStories()),
    requestSingleStory: story => dispatch(requestSingleStory(story)),
    editStory: story => {

      return dispatch(editStory(story));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryEdit);
