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
              <Link  className="index-link" to={`/stories/${parseInt(story)}`}>{stories[parseInt(story)].title}</Link>
              <h4 className="author">by {stories[parseInt(story)].author.first_name} {stories[parseInt(story)].author.last_name}</h4>
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
              <Link className="index-link" to={`/topics/${parseInt(topic)}`}>{topics[parseInt(topic)].topic_name}</Link>
            </li>
          );
        });
        //
        return (
          <div className="index-div">
            <ul className="index-ul subscription-ul">
              <h1>Subscribed Stories</h1>
              {storiesDisplay}
            </ul>
            <ul className="index-ul subscription-ul">
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
