import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './src/App';
import Login from './src/Login';
import User from './src/User';
import Candace from './src/Candace/index';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// default  exportstore, named export history
import store, { history } from './store';


const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login}></IndexRoute>
          <Route path="/candace" component={Candace}></Route>
          <Route path="/user" component={User}></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

render(router, document.getElementById('mount'));
