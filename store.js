import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//root reducer
import rootReducer from './reducers/index';


// create an obj for the default data
const defaultState = {
  currentUser: '',
  candaceView: {
    start: true,
    matches: false,
    saved: false
  }
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export default store;

