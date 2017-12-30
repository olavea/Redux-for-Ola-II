import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import comments from './data/comments'; 
// I don't want comments or likes on Lilliangram
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  // comments //ES6
  // I don't want comments or likes on Lilliangram
};
const enhancers = compose (
  // if there is devTools ? we will rin it devTools() otherwise : we will simply return the store itself
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Error, in console gotta spell compose right on line 1
// Sweep away actions from ... is like they never happened
// commit like a git commit to our initial state devToolsExtension
// revert back to before "stupid dog" comment
// reset all the way back to our initial state devToolsExtension

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);
// we take the browserHistory and we are going to weave in the actual store

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}




export default store;
