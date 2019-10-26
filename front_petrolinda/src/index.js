import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import reducer from './reducers';
import middleware from './middleware';
import App from './App';

const store = createStore(reducer, middleware);

const theme = createMuiTheme({
});


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
