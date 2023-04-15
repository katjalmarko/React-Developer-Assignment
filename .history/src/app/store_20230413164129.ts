import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import taskReducer from '../features/todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;