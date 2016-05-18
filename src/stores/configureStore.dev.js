import  DevTools from '../containers/DevTools';
import { createStore, combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import * as reducers from '../reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

 const store = createStore(
 reducer,
 DevTools.instrument()
 );

 export {store, DevTools};
