import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// default  exportstore, named export history
import store, { history } from './store';

import App from './src/App';
import Login from './src/Login';
import User from './src/User/User';
import Candace from './src/Candace/index';


const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <App /> 
    </Provider>
  </MuiThemeProvider>
)

render(router, document.getElementById('mount'));
