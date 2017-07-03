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
    //
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
    // ;
    const stories = this.props.stories;
    const storyList =  stories.map(story => {
      //
        if (story.author.id === 1){
            return (
              <li key={story.id}>
                <Link   className="index-link"to={`/stories/${story.id}`}>{ story.title }</Link>
                <h4 className="author">by The Guest Account</h4>
                <br/>
              </li>
            );

        } else {
            return (
              <li key={story.id}>
                <Link  className="index-link" to={`/stories/${story.id}`}>{ story.title }</Link>
                <h4 className="author">by { story.author.first_name }  { story.author.last_name }      </h4>
                <br/>
              </li>
            );
        }

      }
    );
    // ;
    // <li>
    //   <h1>All Stories</h1>
    // </li>
    return (
      <div className="index-div">
        <ul className="title-ul">
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
