import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// you notice I am using ./ that is because I want to pull in these two reducers and make them into one.
// posts.js + comments.js = one reducer to rule them all illuSketchNote

const rootReducer = combineReducers({posts, comments, routing: routerReducer });

export default rootReducer;
