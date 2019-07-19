import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';
import GlobalStyle from './styles/global';

import history from './services/history';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  import('./config/reactotron');
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;
