import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      updated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.props.requestSingleStory(parseInt(this.props.match.params.id));
    // this.props.requestAllStories();
  }


  componentWillReceiveProps(){

    if (this.props.story){
      this.state = {
        body: this.props.story.body,
        title: this.props.story.title,
        id: this.props.story.id
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let story = {
      story:{
        title: this.state.title,
        body: this.state.body,
        id: this.state.id
      }
    }
    this.props.editStory(story).then( (stories) => {

      return this.props.history.push(`/stories/${story.story.id}`);
      // return this.props.history.push('/')
    });
  }

  update(property) {
   return event => this.setState({ [property]: event.target.value });
 }


 render() {
   let story = this.props.story;
   if (!this.state.updated && story){
     this.state = {
       title: story.title,
       body: story.body,
       id: story.id,
       updated: true
     }
   }
     return (
       <div className="show-title">


              <ul className="form-ul">
                <li className="li-body">
                <form  className="edit-form" onSubmit={this.handleSubmit}>
                <ul className="form-ul">
                  <li className="li-body">
                  <h2 className="edit-title"> Edit Story </h2>
                  </li>
                </ul>
                  <ul className="form-ul">
                    <li className="li-body">
                      <label>Title:
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                        />
                        </label>
                        <br/>
                      </li>
                    </ul>
                    <ul className="form-ul">
                      <li className="li-body">
                        <label>Body: </label>
                        <textarea
                          rows="50"
                          cols="150"
                          value={this.state.body}
                          onChange={this.update('body')}
                          form="story-form">
                        </textarea>
                         <br/>
                         </li>
                       </ul>
                       <br/>
                     <ul className="form-ul">
                       <li className="li-body">
                        <button>Update Story</button>
                      </li>
                    </ul>
                   </form>
                </li>
              </ul>

            </div>
     )

 }
}


export default withRouter(StoryEdit);
