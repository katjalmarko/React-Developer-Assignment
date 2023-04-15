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