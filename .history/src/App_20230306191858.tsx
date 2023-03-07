import React from 'react'
import { useState } from 'react';

const App = () => {

  const [newTask, setNewTask] = useState<string>("")
  const [toDoList, setToDoList] = useState<string[]>([])
  

  const handleChange = (event) => {
    event.preventDefault()
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newToDoList = [...toDoList, newTask]
    setToDoList(newToDoList)
  }

  const confirmTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewTask("")
  }

  return (
    <div className='App'>
      <form onSubmit={confirmTask}>
      <input type="text"
             value={newTask}
             placeholder="Type your task"
             onChange={handleChange}
             />
      <button onClick={addTask}>
        Add Task
      </button>    
      </form>
      <div>{toDoList.map((task) => {
        return <h1>{task}</h1>
      })}</div>
    </div>
  );
}

export default App
