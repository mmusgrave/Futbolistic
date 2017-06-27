import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class StoryShow extends React.Component {
  componentDidMount() {
    // this.props.requestSingleStory(this.props.match.params.storyId);
    debugger
    this.props.requestAllStories();
  }

  render() {
    const story = this.props.story;
    if (story){
      return (
          <div className="show-title">
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
          </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}


export default StoryShow;
