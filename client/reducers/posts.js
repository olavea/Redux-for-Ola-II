// we need a reducer for each piece of state like comments, posts 
// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
// action, is what happenede
// and here is the store, the state that we have -> in comes the store
// Ok let me see -> we add comments or likes
// return a brand new copy, an updated copy of our store/state -> returns the updated copy of our store


function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;
