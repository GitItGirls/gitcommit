import React from 'react';
import createReactClass from 'create-react-class';


const Start = createReactClass({
  render() {
    console.log('passed',this.props);
    return (
      <div>
        Start
        <button onClick={this.props.candaceView.candaceViewMatches}>go to matches</button>
      </div>
    )
  }
})

export default Start;