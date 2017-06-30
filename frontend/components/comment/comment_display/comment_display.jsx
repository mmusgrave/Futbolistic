// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
//
// class PostDetail extends React.Component {
//   componentDidMount() {
//     this.props.requestSinglePost(this.props.match.params.postId);
//     this.props.requestAllPosts();
//   }
//
//   render() {
//     const post = this.props.post;
//     if (post){
//       return (
//           <div className="show-title">
//             <ul className="show-ul">
//               <li className="li-body">
//                 <h1 className="title">{post.title}</h1>
//               </li>
//             </ul>
//             <ul className="show-ul">
//               <li className="li-body">
//                 <h3 className="show-body">{post.body}</h3>
//               </li>
//             </ul>
//           </div>
//       );
//     } else {
//       return (
//         <div>
//         </div>
//       );
//     }
//   }
// }
//
//
// export default PostDetail;
