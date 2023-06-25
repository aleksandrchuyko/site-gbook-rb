import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//React-bootstrap
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { App } from 'components/App';

import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/site-gbook/">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
