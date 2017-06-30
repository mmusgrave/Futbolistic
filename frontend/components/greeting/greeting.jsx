import React from 'react';
import { Link } from 'react-router-dom';

// export const logout = (e) => {
  // 
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
  // 
  return (
    <hgroup className="header-group">
      <ul className="nav-bar-ul">
        <li className="flyout">
          <div className="dropdown">
            <Link to={`/users/${currentUser.id}`} className="dropbtn header-name white-link">{currentUser.first_name}</Link>
            <ul className="dropdown-content">
              <li className="col_1">
                <a className="drop-items" href="#/story/new">Write a Story</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="flyout">
          <Link to={`/`} className="header-button white-link" onClick={logout}>Log Out</Link>
        </li>
      </ul>
    </hgroup>
  );
};

const Greeting = ({ currentUser, logout, clearErrors }) => {
  // 
    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)

};

export default Greeting;
