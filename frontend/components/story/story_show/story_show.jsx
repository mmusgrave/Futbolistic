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
        <Link to={`/stories/${story.id}/edit`}>LINK</Link>
      );
    } else {
      <div></div>
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

            <ul className="show-ul">
              <li className="li-body">
                <h3 className="show-body">{story.body}</h3>
              </li>
            </ul>
            {this.editButton()}
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
