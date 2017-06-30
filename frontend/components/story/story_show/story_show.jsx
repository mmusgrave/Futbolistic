import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {values } from 'lodash';
import CommentForm from '../../comment/comment_form/comment_form';
import CommentFormContainer from '../../comment/comment_form/comment_form_container';

class StoryShow extends React.Component {
  // componentDidMount() {
  //   // this.props.requestSingleStory(this.props.match.params.storyId);
  //   // 
  //   // this.props.requestAllStories();
  // }

  // componentWillMount() {
  //   
  //   this.props.requestSingleStory();
  // }

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  componentDidMount() {
    

    this.props.requestSingleStory(parseInt(this.props.match.params.id));
    // this.props.requestAllStories();
  }

  editButton() {
    
    const user = this.props.user;
    const story = this.props.story;
    if (user && user.id === story.author.id){
      return (
        <Link to={`/stories/${story.id}/edit`}>Edit Story</Link>
      );
    } else {
      <div></div>
    }
  }

  deleteButton() {
    
    const user = this.props.user;
    const story = this.props.story;
    if (user && user.id === story.author.id){
      // return (
      //   <Link to={`/`} onClick={this.handleDelete} value={story.id}>Delete Story</Link>
      // );
      return (
        <button className="delete-button" onClick={this.handleDelete} value={story.id}>Delete</button>
      );
    } else {
      <div></div>
    }
  }

  handleDelete(e){
    e.preventDefault();
    
    const story = e.currentTarget.value;
    this.props.destroyStory(story)
      .then(action => {
        
        return this.props.history.push("/");
      });
  }

  authorName(){
    const user = this.props.user;
    const story = this.props.story;
    if (story.author.id === 1){
      return (
        <ul className="show-ul">
          <li className="li-body">
            <h4 className="title">by The Guest Account</h4>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="show-ul">
          <li className="li-body">
            <h4 className="title">by {story.author.first_name} {story.author.last_name}</h4>
          </li>
        </ul>
      )
    }
  }

  imageRender() {
    const story = this.props.story;
    
    if (story.image_url !== "/images/original/missing.png"){
      return ( <img src={story.image_url}/> );
    } else {
      return ( <div> </div>)
    }
  }

  commentForm() {
    if (this.props.user) {
      return (<CommentFormContainer/>);
    } else {
      return(<div></div>);
    }
  }

  handleCommentDelete(e){
    e.preventDefault();
    
    const comment = e.currentTarget.value;
    this.props.destroyComment(comment)
      .then(action => {
        
        return this.props.history.push(`/stories/${this.props.story.id}`);
      });
  }

  commentButtons(author_id, comment_id) {
    if (this.props.user) {
      if (author_id === this.props.user.id) {
        return (
          <div>
            <Link to="/">EDIT</Link>
            <button className="delete-button" onClick={this.handleCommentDelete} value={comment_id}>Delete</button>
          </div>
        );
      } else {
        return(<div></div>);
      }
    }else {
      return(<div></div>);
    }


  }

  comments(){
    
    if (this.props.story){

      var comment_ids = values(this.props.story.comments);
      
      var comments = comment_ids.map( (id) => {
        
          return(
            <li key={parseInt(id)}>
              <p>{this.props.comments[parseInt(id)].body}</p>
              <p>from {this.props.comments[parseInt(id)].author.first_name} {this.props.comments[parseInt(id)].author.last_name}</p>
              {this.commentButtons(this.props.comments[parseInt(id)].author.id, parseInt(id))}
              <br/>
            </li>
          );
      });

      
      return (
        <div className="comments">
          <ul>
            <br/>
            <h4>COMMENTS</h4>
            {comments}
            {this.commentForm()}
          </ul>
        </div>
      );

    }
  }

  render() {
    
    const story = this.props.story;
    // const story = this.props.requestSingleStory(parseInt(this.props.match.params.id));
    
    if (story){
      return (
          <div className="show-title">

          {this.imageRender()}
            <ul className="show-ul">
              <li className="li-body">
                <h1 className="title">{story.title}</h1>
              </li>
            </ul>
            {this.authorName()}
            <ul className="show-ul">
              <li className="li-body">
                <h3 className="show-body">{story.body}</h3>
              </li>
            </ul>
            {this.editButton()}
            {this.deleteButton()}
            {this.comments()}
          </div>
      );
    } else {
      return (
        <div className="show-title">
        </div>
      );
    }
  }
}

// <ul className="show-ul">
//   <li className="li-body">
//     <h4 className="title">{story.author.first_name} {story.author.last_name}</h4>
//   </li>
// </ul>


export default StoryShow;
