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

  imageRender() {
    const story = this.props.story;

    if (story.image_url !== "/images/original/missing.png"){
      return ( <img src={story.image_url}/> );
    } else {
      return ( <img src='https://s3.amazonaws.com/futbolistic-pro/defaultSoccerPic.jpg'/>)
    }
  }

  render() {
    // ;
    const stories = this.props.stories;
    const storyListBeta =  stories.map(story => {

      //

        if (story.author.id === 1){
            return (
              <li key={story.id}>
                <Link   className="index-link"to={`/stories/${story.id}`}>
                  <img src={story.image_url}/>
                  { story.title }
                  <h4 className="author">by The Guest Account</h4>
                </Link>
                <br/>
              </li>
            );

        } else {
            return (
              <li key={story.id}>

                <Link  className="index-link" to={`/stories/${story.id}`}>
                  <img src={story.image_url}/>                
                  <div className='title-and-author'>
                    <h1 className="title"> { story.title } </h1>
                    <h4 className="author">by { story.author.first_name }  { story.author.last_name }      </h4>
                  </div>
                </Link>
                <br/>
              </li>
            );
        }

      }
    );
    const storyList = storyListBeta;//.reverse();
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
