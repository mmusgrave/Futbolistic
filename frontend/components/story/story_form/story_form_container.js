import { connect } from 'react-redux';
import StoryForm from './story_form';
import { createStory } from '../../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    topics: state.topics

  }
};

const mapDispatchToProps = dispatch => {
  return {
    createStory: story => dispatch(createStory(story))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);
