function currentUser(state = {}, action) {
  switch(action.type) {
    case 'CANDACE' :
      console.log(state);
      return 'candace'
    case 'USER' :
      console.log(state);
      return 'user'
    case 'UNKNOWN' :
      console.log(state);
      return 'unknown'
    default:
      return state;
  }
}

export default currentUser;
