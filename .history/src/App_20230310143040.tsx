import React from 'react'
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Task from './components/Task';


interface Todo {
  id: number,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

const App = () => {

  return (
    <div className='App'>
      
      <div className='Header'>
        <Header />
      </div>
      
      <div>
        <Task />
      </div>

      {/* Filter Task */}

      {/* Footer */}

    </div>
  );
}

export default App
