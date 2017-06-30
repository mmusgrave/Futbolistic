import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../../actions/comment_actions';

const mapStateToProps = (state) => {
  
  return ({
    storyId: state.stories.currentStory.id
  });
};

const mapDispatchToProps = dispatch => {
  
  return {
    createComment: comment => dispatch(createComment(comment))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
