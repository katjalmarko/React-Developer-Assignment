import React from 'react'
import { useState } from 'react';
import './App.css'

interface Todo {
  id: number,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

const App = () => {

  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState<Todo[]>([])
  

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value)
  }

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value)
  }

  const addTask = () => {
    const newToDo: Todo = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      title: newTitle,
      description: newDescription,
      date: new Date(newDate),
      completion: false,
    };
    setToDoList([...toDoList, newToDo]);
    setNewTitle("");
    setNewDescription("");
    setNewDate("");
  }

  const confirmTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const deleteTask = (id: number) => {
    const filteredToDos = toDoList.filter((task) => task.id !== id)
    setToDoList(filteredToDos)
  }

  const completeTask = (id: number) => {
    const completedToDos = toDoList.map((task) => {
      if (task.id === id) {
        task.completion = !task.completion
      }
      return task;
    })
    setToDoList(completedToDos)
  }

  return (
    <div className='App'>
      
      <div>
        <h1>Database of your Tasks</h1>
      </div>
      
      <form onSubmit={confirmTask}>
      <input type="text"
             value={newTitle}
             placeholder='"Task"'
             onChange={handleTitle}
             />
      <input type="text"
             value={newDescription}
             placeholder='"Description"'
             onChange={handleDescription}
             />     
      <input type="datetime-local" 
             value={newDate}
             placeholder={"Set Date"}
             onChange={handleDate}
             />         
      <button onClick={addTask}>
        Add Task
      </button>    
      </form>
      
      <div>
        {toDoList.map((task) => {
          return (
            <div className={`task ${task.completion ? "completed" : ""}`}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <p>{task.date.toLocaleString()}</p>
              <button onClick={() => deleteTask(task.id)}>
                X
              </button>
              <button onClick={() => completeTask(task.id)}>
                Completed
              </button>
            </div>
        )})}
      </div>

    </div>
  );
}

export default App