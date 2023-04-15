import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import task

export const store = configureStore({
  reducer: {
    user: userReducer,
    // title, descript,...
  },

  reducer: {
    task:
  },
});