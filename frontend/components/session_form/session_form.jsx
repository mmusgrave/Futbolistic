import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    // debugger
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      // this.state = {
      //   first_name: '',
      //   last_name: '',
      //   username: '',
      //   password: ''
      // };
      return(
        <div>
          <h2>Don't Already Have an Account?</h2>
          <div className="nav-link-div">
            <Link className="auth-form-button" to="/signup">SIGN UP</Link>
          </div>
        </div>
      );
    } else {
      // this.state = {
      //   first_name: '',
      //   last_name: '',
      //   username: '',
      //   password: ''
      // };
      return(
        <div>
          <h2>Already Have an Account?</h2>
          <div className="nav-link-div">
            <Link className="auth-form-button" to="/login">LOG IN</Link>
          </div>
        </div>
      );
    }
  }

  formHeader() {
    if (this.props.formType === 'login') {
      return (<h1>Log Into Your Acount</h1>);
    } else {
      return(<h1>Create An Account</h1>);
    }
  }

  formButton() {
    if (this.props.formType === 'login') {
      return(<input className="auth-form-button" type="submit" value="LOG IN" />);
    } else {
      return(<input className="auth-form-button" type="submit" value="SIGN UP" />);
    }
  }

  formInputs() {
    if (this.props.formType === 'login') {
      return;
    } else {
      return(
        <div>
        <ul className="name-errors">
        {this.renderErrors("first_name")}
        {this.renderErrors("last_name")}
        </ul>
          <input type="text"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="create-user-input"
            placeholder="First Name"
          />

          <input type="text"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="create-user-input"
            placeholder="Last Name"
          />
        </div>
      );
    }
  }

  renderErrors(fieldName) {
    const errors = this.props.errors[fieldName];
    if (errors){
      return(
        <ul className="errors">
          {errors.map( (error, i) => (
            <li className="error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <br/>
      );
    }
  }

  render() {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
            {this.formHeader()}
            {this.formInputs()}
            {this.renderErrors("username")}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
              <br/>
              {this.renderErrors("password")}
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
              {this.renderErrors("base")}
              <br/>
              {this.formButton()}
              <br/>
              {this.navLink()}
            </div>
          </form>
        </div>
      );


  }
}

// if (this.props.formType === 'login') {
// } else {
//   return (
//     <div className="login-form-container">
//       <form onSubmit={this.handleSubmit} className="login-form-box">
//         <div className="login-form">
//           <label>Create An Account</label>
//           <br/>
//           {this.renderErrors()}
//           <label>Username:
//             <input type="text"
//               value={this.state.username}
//               onChange={this.update('username')}
//               className="login-input"
//               placeholder="Username"
//             />
//           </label>
//           <br/>
//           <label>Password:
//             <input type="password"
//               value={this.state.password}
//               onChange={this.update('password')}
//               className="login-input"
//               placeholder="Password"
//             />
//           </label>
//           <br/>
//
//           <input type="submit" value="SIGN UP" />
//           <br/>
//           {this.navLink()}
//
//         </div>
//       </form>
//     </div>
//   );
// }

export default withRouter(SessionForm);
