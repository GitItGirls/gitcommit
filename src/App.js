import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';

function mapStateToProps(state) {
  return {
    candaceView: state.candaceView
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

  return (
    <MuiThemeProvider>
    <div className="App">
    <Login/>
      {/* <Route
        exact path='/login'
        render={(props) => {
          return <Login {...props}  />
        }}
      /> */}
      {/* <Route 
        exact path='/register'
        render={(props) => {
          return <Register {...props} />
        }}
        /> */}
      {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
