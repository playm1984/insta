import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componenets/App';

import { Provider } from 'react-redux'
import store from './componenets/redux/store.js'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
