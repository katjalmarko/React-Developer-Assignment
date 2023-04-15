import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface Todo {
  id: string,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

interface ToDoState {
  todoList: Todo[];
}

const initialState: ToDoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todoList.splice(index, 1);
      }
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;



export const todoSlice = createSlice({
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
      const task = state.toDoList.find((t) => t.id === action.payload);
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