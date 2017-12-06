import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';
import candaceView from './candaceView';


const rootReducer = combineReducers({currentUser, candaceView, routing: routerReducer});

export default rootReducer;