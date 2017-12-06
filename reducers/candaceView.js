function candaceView(state = {}, action) {
  switch(action.type) {
    case 'START' :
      console.log("candaceView - start");
      console.log(state);
      console.log(state[0].likes);
      return {
        start: true,
        matches: false,
        saved: false
      }
    case 'MATCHES' :
      console.log("candaceView - matches");
      console.log(state);
      return {
        start: false,
        matches: true,
        saved: false
      }
    case 'SAVED' :
      console.log("candaceView - saved");
      console.log(state);
      return {
        start: false,
        matches: false,
        saved: true
      }
    default:
      return state;
  }
}

export default candaceView;
