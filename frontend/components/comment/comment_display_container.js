// import { connect } from 'react-redux';
// import PostDetail from './post_detail';
// import {
//   requestSinglePost,
//   requestAllPosts
//  } from '../actions/post_actions';
// import { selectSinglePost } from '../reducers/selectors';
// import { selectAllPosts } from '../reducers/selectors';
//
// const mapStateToProps = (state) => {
//   return({
//     posts: state.posts.posts,
//     post: state.posts.posts[state.posts.currentPost]
//   });
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     requestAllPosts: () => dispatch(requestAllPosts()),
//     requestSinglePost: post => dispatch(requestSinglePost(post))
//   }
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostDetail);
