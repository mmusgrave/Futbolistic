import { connect } from 'react-redux';
import StoryIndex from './story_index';
import {
  requestAllStories
} from '../../../actions/story_actions';
import {
  selectAllStories
} from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  stories: selectAllStories(state)
});

const mapDispatchToProps = dispatch => {
  return {
    requestAllStories: () => dispatch(requestAllStories())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
