import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: '',
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);

  }

  updateFile(e) {
    e.preventDefault();
    // 
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile:file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);
    if (this.state.imageFile){
      formData.append("story[image]", this.state.imageFile);
    }
    // let story = {
    //   title: this.state.title,
    //   body: this.state.body,
    //   image: this.state.imageFile,
    // }
    
    this.props.createStory(formData).then( () => {
      return this.props.history.push(`/`)
    });
    // this.props.createStory(story).then( () => {
    //   return this.props.history.push(`/`)
    // });
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
           <label>Main Image: </label>
             <input
               type="file"
               onChange={this.updateFile}
             />
             <img src={this.state.imageUrl}/>
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
