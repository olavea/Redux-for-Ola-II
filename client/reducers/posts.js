// we need a reducer for each piece of state like comments, posts 
// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state
// action, is what happenede
// and here is the store, the state that we have -> in comes the store
// Ok let me see -> we add comments or likes
// return a brand new copy, an updated copy of our store/state -> returns the updated copy of our store

// Video 9 how do we hook the two up?
// what do you dispatch? You actually just dispatch an action, an object like this:
// {
//     type: 'INCREMENT_LIKES',
//     index
//   }
// in the console
// why is comments running?
// This is fundamentalism
// every time we dispatch an action every reducer is going to run <away> illuSketchNote
// if something is going to happen in state is up to you, but first see something

function posts(state = [], action) {
  // console.log("The post will change");
  // console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}


export default posts;
