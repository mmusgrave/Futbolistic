import { connect } from 'react-redux';
import StoryShow from './story_show';
import {
  requestSingleStory,
  requestAllStories,
  deleteStory
} from '../../../actions/story_actions';
import {
  deleteComment
} from '../../../actions/comment_actions';
// import { selectSingleStory } from '../reducers/selectors';
// import { selectAllStories } from '../reducers/selectors';

const mapStateToProps = (state) => {

  
  let newComments = {};
  if (state.stories.currentStory && state.stories.currentStory.comments.length > 0) {
    newComments = {};
    
    state.stories.currentStory.comments.forEach( (id) => {
      newComments[parseInt(id)] = state.comments.comments[parseInt(id)];
    });
    
  }
  
  return({
    // posts: state.stories,
    user: state.session.currentUser,
    story: state.stories.currentStory,
    comments: newComments
  });
};

const mapDispatchToProps = dispatch => {
  return {
    // requestAllStories: () => dispatch(requestAllStories()),
    // requestAllStories: () => dispatch(requestAllStories()),
    requestSingleStory: id => dispatch(requestSingleStory(id)),
    destroyStory: (story) => dispatch(deleteStory(story)),
    destroyComment: (comment) => dispatch(deleteComment(comment)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);
