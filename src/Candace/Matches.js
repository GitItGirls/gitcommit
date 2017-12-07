import React, { Component } from 'react';
import createReactClass from 'create-react-class';


import Match from './Match';

class Matches extends Component {
  constructor(props) {
  super(props);
  }

  makeReq() {
    fetch('/get')
    .then(response => response.json())
    .then(data => console.log(data));
  }



  render() {
    return (
      <div>
        <Match/>
        <button onClick={this.props.candaceView.candaceViewSaved}>go to saved</button>
        <button onClick={this.makeReq}>GET</button>
      </div>
    )
  }
}

export default Matches;