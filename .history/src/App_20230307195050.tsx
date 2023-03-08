import React from 'react'
import { useState } from 'react';
import ToDoList from './components/ToDoList';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
}

const App = () => {

  return (
    <div className='App'>
      <ToDoList />
    </div>
  );
}

export default App
