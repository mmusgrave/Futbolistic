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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
      this.state = {
        first_name: '',
        last_name: '',
        username: '',
        password: ''
      };
      return(
        <div>
          <h2>Don't Already Have an Account?</h2>
          <div className="nav-link-div">
            <Link onClick={this.props.clearErrors} to="/signup">SIGN UP</Link>
          </div>
        </div>
      );
    } else {
      this.state = {
        first_name: '',
        last_name: '',
        username: '',
        password: ''
      };
      return(
        <div>
          <h2>Already Have an Account?</h2>
          <div className="nav-link-div">
            <Link onClick={this.props.clearErrors} to="/login">LOG IN</Link>
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
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="create-user-input"
            placeholder="First Name"
          />
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="create-user-input"
            placeholder="Last Name"
          />
          <br/><br/>
        </div>
      );
    }
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <div key={`error-${i}`}>
              <li className="error" key={`error-${i}`}>
                {error}
              </li>
              <br/>
            </div>
          ))}
        </ul>
      );
    }
  }

  render() {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
            {this.formHeader()}
            {this.renderErrors()}
            {this.formInputs()}
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
              <br/><br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
              <br/><br/>
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
