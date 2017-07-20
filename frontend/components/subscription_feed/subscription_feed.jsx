import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SubscriptionFeedContainer from './subscription_feed_container';
import { merge } from 'lodash';


class SubscriptionFeed extends React.Component {

  constructor(props){
    super(props);


  }
  componentWillMount() {


  }

  render() {

    if (this.props.stories){
        const stories = this.props.stories;
        const storiesArray = Object.keys(stories);

        const storiesDisplay = []

        storiesArray.forEach( (story) => {

          storiesDisplay.push(
            <li key={parseInt(story)}>
              <Link  className="subscription-link" to={`/stories/${parseInt(story)}`}>
                <img src={stories[parseInt(story)].image_url}/>
                <div className='sub-title-and-author'>
                  <h4 className="title">{stories[parseInt(story)].title}</h4>
                  <h4 className="author">by {stories[parseInt(story)].author.first_name} {stories[parseInt(story)].author.last_name}</h4>
                </div>
              </Link>
              <br/>
            </li>
          );
        });
        const topics = this.props.topics;
        const topicsArray = Object.keys(topics);

        const topicsDisplay = []

        topicsArray.forEach( (topic) => {
          topicsDisplay.push(
            <li key={parseInt(topic)}>
              <Link className="topic-link" to={`/topics/${parseInt(topic)}`}>{topics[parseInt(topic)].topic_name}</Link>
            </li>
          );
        });
        //
        return (
          <div className="index-div">
            <ul className="index-ul stories-subscription-ul">
              <h1>Subscribed Stories</h1>
              {storiesDisplay}
            </ul>
            <ul className="index-ul topics-subscription-ul">
              <h1>Subscribed Topics</h1>
              {topicsDisplay}
            </ul>

          </div>
        );
    }else{
      return(<div className="index-div">NO SUBSCRIPTIONS</div>);
    }
    // <br/><br/><br/><br/>
    // <Link className="index-link" to="/subscriptions/edit/"><h1>Subscription Selection</h1></Link>

  }
}
//
export default withRouter(SubscriptionFeed);
