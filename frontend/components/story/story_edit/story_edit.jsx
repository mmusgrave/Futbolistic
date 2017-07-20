import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      imageFile: null,
      imageUrl: null,
      updated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    formData.append("story[id]", this.state.id);
    if (this.state.imageFile){
      formData.append("story[image]", this.state.imageFile);
    }
    debugger
    // let story = {
    //   story:{
    //     title: this.state.title,
    //     body: this.state.body,
    //     id: this.state.id
    //   }
    // }
    this.props.editStory(formData).then( (stories) => {

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
                <li className="form-body">
                <form  className="edit-form" onSubmit={this.handleSubmit}>
                <ul className="form-ul">
                  <li className="form-body">
                  <h2 className="edit-title"> Edit Story </h2>
                  </li>
                </ul>
                  <ul className="form-ul">
                    <li className="form-body">
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
                     <li className="form-body">
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
                      <li className="form-body">
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
                       <li className="form-body">
                        <button className="header-button">Update</button>
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
