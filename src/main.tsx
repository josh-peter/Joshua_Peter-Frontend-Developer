import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux"
import { persiststore, store } from './services/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
    <PersistGate persistor={persiststore}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
