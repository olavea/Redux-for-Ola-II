import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Routing, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// expose our store to our actual aplication here
// wrap the entire router itself in a provider tag
// swap out browserHistory with history

import Raven from 'raven.js';
import { sentry_url } from'./data/config';

Raven.config(sentry_url{
  tags: {
    git_commit:'asdfasblabla'
    userLevel: 'editor'         
  }
}).install();

logException(new Error('download failed!'),{
  email: 'wesbos@gmail.com'
});
// use that logException to log our own errors, bring along email adress use try catch, catchErrors
// give myself a new error se console log below , go to console.log "download failed" "it is throwing" go to Sentry "download failed" 9:03 min in video 17
// more in in video 17 10:00 ->

// console.log(store.doesNot.nope())

// console.log(window.doesNotExist.nope);
// Open up console cannot read property 'nope' of undefined
// Go into sentry dashboard and look at error: "TypeError ..." click trough and look at gitCommit

Raven.captureMessage('Something bad happened!'); 
// You dont see the error here because the error did not actually happen <9:53 and then Wes saw the errror anyway, How?>
// Go into sentry dashboard and look at error: "

// see user feedback inside sentry

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
