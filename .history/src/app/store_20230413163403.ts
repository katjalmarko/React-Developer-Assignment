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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;