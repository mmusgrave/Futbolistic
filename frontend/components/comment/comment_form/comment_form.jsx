import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
//
  handleSubmit(e) {
    e.preventDefault();

    let comment = {
      body: this.state.body,
      story_id: this.props.storyId
    }

    // this.state.body = "";
    this.setState({ ['body']: '' })
    this.props.createComment(comment).then( () => {
      //figure out how to make this redirect to the story page again

      // this.props.resetForm();
      return this.props.history.push(`/stories/${comment.story_id}`)
    });
  }
//
  update(property) {
   return e => this.setState({ [property]: e.target.value });
 }

 render() {

   return (
     <form  id="story-form" className="create-form" onSubmit={this.handleSubmit}>
       <ul className="form-ul">
         <li className="li-body">
           <p className="create-title">Create New Comment</p>
         </li>
       </ul>
        <ul className="form-ul">
        <li className="li-body">
            <textarea
              rows="5"
              cols="70"
              value={this.state.body}
              onChange={this.update('body')}
              form="story-form"
              placeholder="Enter text here">
            </textarea>
            <br/>
          </li>
          </ul>
          <ul className="form-ul">
            <li className="li-body">
            <button>Create Comment</button>
            </li>
          </ul>
        </form>
   )
 }
}
//
export default withRouter(CommentForm);
//
