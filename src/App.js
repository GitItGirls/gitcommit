import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { withRouter } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import { Switch } from 'react-router-dom'

import Login from './Login';
import User from './User/User';
import Candace from './Candace/index';

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
  console.log(this.props.currentUser);
  if (this.props.currentUser === 'unknown') {
    return (
      <MuiThemeProvider>
      <div className="App">
      <Login />
      {this.props.children}
      </div>
      </MuiThemeProvider>
      );
  } else if (this.props.currentUser === 'candace') {
    return (
      <div className="App">
      <Candace />
      {this.props.children}
      </div>
      );
  } else if (this.props.currentUser === 'user') {
    return (
      <div className="App">
      <User />
      {this.props.children}
      </div>
      );
  }

  // return (
  //   <MuiThemeProvider>
  //   <div className="App">
    
    
  //   {/* <Login/> */}
  //     {/* <Route
  //       exact path='/login'
  //       render={(props) => {
  //         return <Login {...props}  />
  //       }}
  //     /> */}
  //     {/* <Route 
  //       exact path='/register'
  //       render={(props) => {
  //         return <Register {...props} />
  //       }}
  //       /> */}
  //     {this.props.children}
  //     </div>
  //     </MuiThemeProvider>
  //   );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
