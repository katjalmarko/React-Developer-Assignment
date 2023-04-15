import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Todo {
  id: string,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
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
    addTask: (state, action: PayloadAction<Todo>) => {
      state.toDoList.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.toDoList.find((task) => task.id === action.payload);
      if (task) {
        task.completion = true;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.toDoList = state.toDoList.filter((t) => t.id !== action.payload);
    },
  },
});

export const { setToDoList, addTask, completeTask, deleteTask } = tasksSlice.actions;

export const selectToDoList = (state: RootState) => state.tasks.toDoList;

export default tasksSlice.reducer;
