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
import { AZUL_MARINHO, BABY_PINK } from './utils/colors';

const store = createStore(reducer, middleware);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: AZUL_MARINHO,
      dark: '#eb8423',
      contrastText: '#fff',
    },
    secondary: {
      light: BABY_PINK,
      main: '#eb8423',
      dark: 'black',
      contrastText: '#fff',
    },
  },
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
