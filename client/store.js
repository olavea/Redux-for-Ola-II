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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
// we take the browserHistory and we are going to weave in the actual store

export default store;
