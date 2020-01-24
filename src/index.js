import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './styles/style.css';

import { App } from './components/App';
import { ErrorBoundry } from './components/ErrorBoundry';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
