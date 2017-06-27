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
    const storyList =  stories.map(story => {
      debugger
        if (story.author.id === 1){
            return (
              <li key={story.id}>
              <Link to={`/stories/${story.id}`}>{ story.title }</Link>
              <h4>by The Guest Account</h4>
              </li>
            );

        } else {
            return (
              <li key={story.id}>
              <Link to={`/stories/${story.id}`}>{ story.title }</Link>
              <h4>by { story.author.first_name }  { story.author.last_name }      </h4>
              </li>
            );
        }

      }
    );
    debugger;
    return (
      <div className="index-div">
        <ul className="title-ul">
          <li>
            <h1>All Stories</h1>
          </li>
          <li>
            <section className="index_box">
              <ul className="index-ul">
                { storyList }
              </ul>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default StoryIndex;
