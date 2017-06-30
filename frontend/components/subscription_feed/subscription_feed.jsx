import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SubscriptionFeedContainer from './subscription_feed_container';
import { merge } from 'lodash';


class SubscriptionFeed extends React.Component {

  constructor(props){
    super(props);

    // this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {

    // this.props.requestSingleTopic(parseInt(this.props.match.params.id));
  }
  //
//
//   // handleDelete(e){
//   //   e.preventDefault();
//   // //   const story = e.currentTarget.value;
//   // //   this.props.destroyStory(story)
//   // //     .then(action => {
//   // //       this.props.history.push("/stories");
//   // //     });
//   // }
//
  render() {
    // ;
    // const stories = this.props.stories;
    // const storyList =  stories.map(story => {
    //   //
    //     if (story.author.id === 1){
    //         return (
    //           <li key={story.id}>
    //           <Link to={`/stories/${story.id}`}>{ story.title }</Link>
    //           <h4>by The Guest Account</h4>
    //           </li>
    //         );
    //
    //     } else {
    //         return (
    //           <li key={story.id}>
    //           <Link to={`/stories/${story.id}`}>{ story.title }</Link>
    //           <h4>by { story.author.first_name }  { story.author.last_name }      </h4>
    //           </li>
    //         );
    //     }
    //
    //   }
    // );
    // ;
    // this.props.requestSingleTopic(parseInt(this.props.match.params.id));
    // const topic = this.props.currentTopic
    if (this.props.stories){
    //   // if (this.props.currentTopic.id === parseInt(this.props.match.params.id)){
    //
        const stories = this.props.stories;
        const storiesArray = Object.keys(stories);

        const storiesDisplay = []

        storiesArray.forEach( (story) => {
          // storiesArray.push(story);
          //
          storiesDisplay.push(
            <li key={parseInt(story)}>
              <Link to={`/stories/${parseInt(story)}`}>{stories[parseInt(story)].title}</Link>
              <h4>by {stories[parseInt(story)].author.first_name} {stories[parseInt(story)].author.last_name}</h4>
            </li>
          );
        });
        const topics = this.props.topics;
        const topicsArray = Object.keys(topics);

        const topicsDisplay = []

        topicsArray.forEach( (topic) => {
          // topicsArray.push(story);
          //
          topicsDisplay.push(
            <li key={parseInt(topic)}>
              <Link to={`/topics/${parseInt(topic)}`}>{topics[parseInt(topic)].topic_name}</Link>
            </li>
          );
        });
        //
        return (
          <div className="index-div">
          <h1>Subscribed Stories</h1>
            <ul>
              {storiesDisplay}
            </ul>
          <h1>Subscribed Topics</h1>
            <ul>
              {topicsDisplay}
            </ul>
          </div>
        );
    //   // } else {
    //   //     return(<div></div>);
    //   // }
    }else{
      return(<div className="index-div">SUBSCRIPTIONS</div>);
    }
    // <ul className="title-ul">
    //   <li>
    //     <h1>All Stories</h1>
    //   </li>
    //   <li>
    //     <section className="index_box">
    //       <ul className="index-ul">
    //         { storyList }
    //       </ul>
    //     </section>
    //   </li>
    // </ul>
  }
}
//
export default withRouter(SubscriptionFeed);
