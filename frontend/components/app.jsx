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
import StoryFormContainer from './story/story_form/story_form_container';
import StoryIndexContainer from './story/story_index/story_index_container';
import StoryShowContainer from './story/story_show/story_show_container';
import StoryEditContainer from './story/story_edit/story_edit_container';
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
        <ProtectedRoute exact path="/story/new" component={StoryFormContainer} />
        <Route exact path='/' component={StoryIndexContainer} />
        <Route exact path='/stories/:id' component={StoryShowContainer} />
        <ProtectedRoute exact path='/stories/:id/edit' component={StoryEditContainer} />
        <AuthRoute exact path="/login" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
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
