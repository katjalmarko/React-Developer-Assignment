import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // title, descript,...
  },
});