//React
import React from 'react';
import ReactDOM from 'react-dom';


import {
  login,
  signup,
  logout
} from './actions/session_actions';
import {
  createStory
} from './actions/story_actions';

//components
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
// we don't put the store directly on the window because
// it can be confusing when debugging, sometimes giving you access to state
// when you shouldn't
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //For testing only
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.createStory = createStory;
  //for testing only

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
