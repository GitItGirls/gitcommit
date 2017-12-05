import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './src/App';
import Login from './src/Login';
import User from './src/User';
import Candace from './src/Candace';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Candace}></IndexRoute>
      <Route path="/candace" component={Candace}></Route>
      <Route path="/user" component={User}></Route>
    </Route>
  </Router>
  </MuiThemeProvider>
)

render(router, document.getElementById('mount'));
