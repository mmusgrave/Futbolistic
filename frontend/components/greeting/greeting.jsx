import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">

    <ul>
      <li className="flyout">
        <Link to="/signup" className="white-link"> Sign up </Link>
      </li>
      <li className="flyout">
        <Link to="/login" className="white-link">  Login </Link>
      </li>
    </ul>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
  <ul className="nav-bar-ul">
    <li className="flyout">
        <label className="header-name white-link">{currentUser.username}</label>
    </li>
    <li className="flyout">
        <button className="header-button white-link" onClick={logout}>Log Out</button>
    </li>
  </ul>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
