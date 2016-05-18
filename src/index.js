import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App';
import { Home } from './components';


let store, DevTools = null;

if(process.env.NODE_ENV === 'development'){
  store  = require('./stores/configureStore.dev').store;
  DevTools = require('./stores/configureStore.dev').DevTools;
} else {
  store = require('./stores/configureStore.prod').store;
}

let history = syncHistoryWithStore(browserHistory, store);





ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
      <DevTools/>
    </div>
</Provider>,
document.getElementById('app')
);
