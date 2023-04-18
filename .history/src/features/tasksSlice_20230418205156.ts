import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Todo {
  id: string;
  title: string;
  description: string;
  date: Date;
  completion: boolean;
}

interface TasksState {
  toDoList: Todo[];
}

const initialState: TasksState = {
  toDoList: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setToDoList: (state, action: PayloadAction<Todo[]>) => {
      state.toDoList = action.payload;
    },
  },
});

export const { setToDoList } = tasksSlice.actions;

export const selectToDoList = (state: RootState) => state.tasks.toDoList;

export default tasksSlice.reducer;
