import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { withRouter } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FlatButton from 'material-ui/FlatButton';


import Login from './Login';
import User from './User/User';
import Candace from './Candace/index';

const styles = {
  title: {
    cursor: 'pointer',
  },
  appBar: {
    height: 60,
    backgroundColor: '#2b2b2b',
  }
};

function mapStateToProps(state) {
  return {
    candaceView: state.candaceView,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends Component {
  constructor(props) {
    super(props)
  }

render() {
  if (this.props.currentUser === 'unknown') {
    return (
      <div className="App">
      <AppBar
      style={styles.appBar}
      title={<span style={styles.title}>candace / gitcommit</span>}
      iconElementLeft={<IconButton><Favorite /></IconButton>}
      iconElementRight={<FlatButton label="< >" />}
      />
      <Login />
      {this.props.children}
      </div>
      );
  } else if (this.props.currentUser === 'candace') {
    return (
      <div className="App">
      <AppBar
      style={styles.appBar}
      title={<span style={styles.title}>candace / gitcommit</span>}
      iconElementLeft={<IconButton><Favorite /></IconButton>}
      iconElementRight={<FlatButton label="< >" />}
      />
      <Candace />
      {this.props.children}
      </div>
      );
  } else if (this.props.currentUser === 'user') {
    return (
      <div className="App">
      <AppBar
      style={styles.appBar}
      title={<span style={styles.title}>candace / gitcommit</span>}
      iconElementLeft={<IconButton><Favorite /></IconButton>}
      iconElementRight={<FlatButton label="< >" />}
      />
      <User />
      {this.props.children}
      </div>
      );
  }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
