import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let story = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createStory(story).then( () => {
      return this.props.history.push(`/`)
    });
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
 }

 render() {
   return (
     <form  id="story-form" className="create-form" onSubmit={this.handleSubmit}>
       <ul className="form-ul">
         <li className="li-body">
           <h1 className="create-title">Create New Story</h1>
         </li>
       </ul>
       <ul className="form-ul">
        <li className="li-body">
          <label>Title: </label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"
            />
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
              form="story-form"
              placeholder="Enter text here">
            </textarea>
            <br/>
          </li>
          </ul>
          <ul className="form-ul">
            <li className="li-body">
            <button>Create Story</button>
            </li>
          </ul>
        </form>
   )
 }
}

export default withRouter(StoryForm);
