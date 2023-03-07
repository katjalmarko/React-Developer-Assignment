import React from 'react'
import { useState } from 'react';

const App = () => {

  const [newTask, setNewTask] = useState<string>("")
  const [toDoList, setToDoList] = useState<string[]>([])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    setToDoList([...toDoList, newTask])
  }

  const confirmTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewTask("")
  }

  const deleteTask = () => {
    setToDoList([toDoList.length - 1])
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
      
      <div>
        {toDoList.map((task) => {
          return <h1>{task}</h1>
        })}
        
        <button on>
          X
        </button>
      
      </div>
    </div>
  );
}

export default App
