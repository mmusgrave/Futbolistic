import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  // debugger
  return (
    <div>
      <header>
        <NavBarContainer />
        <GreetingContainer />
      </header>
      <div className="content">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </div>
  );
};

export default App;

// <header>
//   <Link to="/" className="header-link">
//     <h1>Futbolistic</h1>
//   </Link>
//   <GreetingContainer />
// </header>
// <Switch>
//   <AuthRoute path="/login" component={SessionFormContainer} />
//   <AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
