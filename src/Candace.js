import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router';

import Matches from './Matches';

const Candace = createReactClass({
  render() {
    // if statement -> if pending in table > 0, return this
    return (
      <div>
        <Link to="/">Login</Link>
        <Matches/>
      </div>
    )
  }
})

export default Candace;