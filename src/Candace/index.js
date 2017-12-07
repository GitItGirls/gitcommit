import React, { Component } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/actionCreators';

import Start from './Start';
import Matches from './Matches';
import Saved from './Saved';

function mapStateToProps(state) {
  return {
    candaceView: state.candaceView
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class Candace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hubs: []
    };
  
    this.update = this.update.bind(this);
  }

  update(obj) {
    this.setState(obj);
  }

  render() {
    console.log(this.props.candaceView);
    if (this.props.candaceView.start === true) {
      return (
        <div className='candace'>
          <Start 
          candaceView={this.props} 
          update={this.update}
          hubs={this.state.hubs}
          />
        </div>
      )
    } else if (this.props.candaceView.matches === true) {
      return (
        <div className='candace'>
          <Matches
          candaceView={this.props}
          hubs={this.state.hubs}
          />
        </div>
      )
    } else if (this.props.candaceView.saved === true) {
      return (
        <div className='candace'>
          <Saved
          candaceView={this.props}
          hubs={this.state.hubs}
          />
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Candace);