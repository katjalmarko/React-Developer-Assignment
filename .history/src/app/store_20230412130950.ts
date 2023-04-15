import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import taskReducer from

export const store = configureStore({
  reducer: {
    user: userReducer,
    // title, descript,...
  },

  reducer: {
    task:
  },
});