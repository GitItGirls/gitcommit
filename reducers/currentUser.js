function currentUser(state = '', action) {
  switch(action.type) {
    case 'CANDACE' :
      console.log("current user reducer");
      console.log(state);
      return 'candace';
    case 'NOT_CANDACE' :
      console.log("current user reducer");
      console.log(state);
      return 'notCandace';
    default:
      return state;
  }
}

export default currentUser;
