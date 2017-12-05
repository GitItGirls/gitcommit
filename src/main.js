import React from 'react';
import createReactClass from 'create-react-class';

const Main = createReactClass({
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;