import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { configureStore } from '@reduxjs/toolkit';

// const storedux = configureStore({
//   reducer: {

//   }
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider   >
      <App />
    </Provider>
  </React.StrictMode>
);
