import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class StoryShow extends React.Component {
  // componentDidMount() {
  //   // this.props.requestSingleStory(this.props.match.params.storyId);
  //   // debugger
  //   // this.props.requestAllStories();
  // }

  // componentWillMount() {
  //   debugger
  //   this.props.requestSingleStory();
  // }

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    debugger

    this.props.requestSingleStory(parseInt(this.props.match.params.id));
    // this.props.requestAllStories();
  }

  editButton() {
    debugger
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
    debugger
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
    debugger
    const story = e.currentTarget.value;
    this.props.destroyStory(story)
      .then(action => {
        this.props.history.push("/");
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

  render() {
    debugger
    const story = this.props.story;
    // const story = this.props.requestSingleStory(parseInt(this.props.match.params.id));
    debugger
    if (story){
      return (
          <div className="show-title">
          <h1 >  ufyfjyfjfj</h1>
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
