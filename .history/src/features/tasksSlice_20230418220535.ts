import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Todo {
  id: string;
  title: string;
  description: string;
  date: Date;
  completion: boolean;
}

interface TasksState {
  tasks: Todo[];
  filter: 'all' | 'completed' | 'ongoing';
  filterValue: string;
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
  filterValue: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Todo[]>) => {
      state.tasks = action.payload;
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'ongoing'>) => {
      state.filter = action.payload;
    },
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload;
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completion = true;
      }
    },
    uncompleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completion = false;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { setTasks, setFilter, setFilterValue, completeTask, uncompleteTask, deleteTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.filter;
export const selectFilterValue = (state: RootState) => state.tasks.filterValue;

export default tasksSlice.reducer;
