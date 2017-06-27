import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import StoryIndexContainer from './story_index_container';
import { merge } from 'lodash';


class StoryIndex extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    debugger
    this.props.requestAllStories();
  }

  handleDelete(e){
    e.preventDefault();
  //   const story = e.currentTarget.value;
  //   this.props.destroyStory(story)
  //     .then(action => {
  //       this.props.history.push("/stories");
  //     });
  }

  render() {
    debugger;
    const stories = this.props.stories;
    const storyList =  stories.map(story =>
      <li key={story.id}>
              <h2>{ story.title }       </h2>
              <h4>{ story.body }       </h4>
      </li>
    );
    debugger;
    return (
      <div className="index-div">
        <ul className="title-ul">
          <h1>All Stories</h1>
        </ul>
        <section className="index_box">
          <ul className="index-ul">
            { storyList }
          </ul>
        </section>
      </div>
    );
  }
}

export default StoryIndex;
