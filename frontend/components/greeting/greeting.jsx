import React from 'react';
import { Link } from 'react-router-dom';

// export const logout = (e) => {
  // debugger
  // e.preventDefault();
 // return logout();
  // return this.props.history.push(`/`);
  // return history.push(`/`);
// }

const sessionLinks = (clearErrors) => {
  return (
    <nav className="login-signup">
      <ul className="nav-bar-ul">
        <li className="flyout">
          <Link to="/signup" className="header-button white-link"> Sign up </Link>
        </li>
        <li className="flyout">
          <Link to="/login" className="header-button white-link">  Login </Link>
        </li>
      </ul>
    </nav>

  );
};

const personalGreeting = (currentUser, logout) => {
  debugger
  return (
    <hgroup className="header-group">
      <ul className="nav-bar-ul">
        <li className="flyout">
          <label className="header-name white-link">{currentUser.first_name}</label>
        </li>
        <li className="flyout">
          <button className="header-button white-link" onClick={logout}>Log Out</button>
        </li>
      </ul>
    </hgroup>
  );
};

const Greeting = ({ currentUser, logout, clearErrors }) => {
  debugger
    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)

};

export default Greeting;
