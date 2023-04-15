import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import taskReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    // title, descript,...
  },
});