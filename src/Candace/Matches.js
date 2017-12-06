import React from 'react';
import createReactClass from 'create-react-class';

import Match from './Match';

const Matches = createReactClass({
  render() {
    return (
      <div>
        <Match/>
        <button onClick={this.props.candaceView.candaceViewSaved}>go to saved</button>
      </div>
    )
  }
})

export default Matches;