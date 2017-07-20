import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TopicShowContainer from './topic_show_container';
import { merge } from 'lodash';


class TopicShow extends React.Component {

  constructor(props){
    super(props);

    // this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {

    this.props.requestSingleTopic(parseInt(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    // this.props.history.push(`/topics/${parseInt(nextProps.match.params.id)}`);
    if(this.props.currentTopic) {
      if(this.props.currentTopic.id !== parseInt(nextProps.match.params.id)) {
        this.props.requestSingleTopic(parseInt(nextProps.match.params.id));

      }
    }

  }


  // handleDelete(e){
  //   e.preventDefault();
  // //   const story = e.currentTarget.value;
  // //   this.props.destroyStory(story)
  // //     .then(action => {
  // //       this.props.history.push("/stories");
  // //     });
  // }

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

    const topic = this.props.currentTopic;
    if (topic && topic.id === parseInt(this.props.match.params.id)){
      // if (this.props.currentTopic.id === parseInt(this.props.match.params.id)){

        const storiesArray = this.props.currentTopic.stories;
        const stories = this.props.stories;
        const storiesDisplay = []
        //
        storiesArray.forEach( (story) => {
          // storiesArray.push(story);
          debugger
          storiesDisplay.push(
            <li key={parseInt(story)}>
              <Link className="index-link" to={`/stories/${parseInt(story)}`}>
                <img src={stories[parseInt(story)].image_url}/>
                <div className='title-and-author'>
                  <h2 className="title">{stories[parseInt(story)].title}</h2>
                  <h4 className="author" >by {stories[parseInt(story)].author.first_name} {stories[parseInt(story)].author.last_name}</h4>
                </div>
              </Link>
              <br/>
            </li>
          );
        });

        return (
          <div className="index-div">
            <ul className="index-ul">
              <h1 className="topic-title">{this.props.currentTopic.topic_name}</h1>
              {storiesDisplay}
            </ul>
          </div>
        );
      // } else {
      //     return(<div></div>);
      // }
    }else{
      return(<div></div>);
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

export default withRouter(TopicShow);
