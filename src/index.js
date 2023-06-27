import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/Navigation/Navigation';
import { store } from 'components/redux/store';
import {Provider} from 'react-redux'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { persistor } from "./components/redux/store"
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook-test">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
