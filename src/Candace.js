import React from 'react';
import createReactClass from 'create-react-class';

import Matches from './Matches';

const Candace = createReactClass({
  render() {
    // if statement -> if pending in table > 0, return this
    return (
      <div>
        <Matches/>
      </div>
    )
  }
})

export default Candace;