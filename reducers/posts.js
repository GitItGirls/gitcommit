function posts(state = [], action) {
  switch(action.type) {
    case 'COUNTER' :
      console.log("Counting!!");
      console.log('state',state);
      console.log(state[0].likes);
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
