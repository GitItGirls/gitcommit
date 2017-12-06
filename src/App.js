import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login';

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
      
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;