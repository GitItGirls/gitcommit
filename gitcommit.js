import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
// default  exportstore, named export history
import store, { history } from './store';

import App from './src/App';

const router = (
  <MuiThemeProvider>
    <Provider store={store}>
      <App /> 
    </Provider>
  </MuiThemeProvider>
)

render(router, document.getElementById('mount'));
