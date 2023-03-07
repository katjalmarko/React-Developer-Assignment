import React from 'react'
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: any; /* dorobiť typ */
}

const App = () => {

  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [toDoList, setToDoList] = useState<Todo[]>([])
  

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  }

  const handleDescription = (e) => {
    
  }

  const addTask = () => {
    const newToDo: Todo = {
      id: Math.floor(Math.random()* 1000),
      title: newTitle,
      description: '',
      date: new Date(),
    };
    setToDoList([...toDoList, newToDo]);
    setNewTitle("");
  }

  const confirmTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewTitle("")
  }

  const deleteTask = (id: number) => {
    const filteredToDos = toDoList.filter((task) => 
    task.id !== id)
    setToDoList(filteredToDos)
  }


  return (
    <div className='App'>
      
      <form onSubmit={e => handleDescription}>
      <input type="text"
             value={newTitle}
             placeholder="Type your task"
             onChange={handleTitle}
             />
      <input type="text"
             value={newDescription}
      />       
      <button onClick={addTask}>
        Add Task
      </button>    
      </form>
      
      <div>
        {toDoList.map((task) => {
          return (
            <div>
            <h1>{task.title}</h1>
            <h1>{task.description}</h1>
            <button onClick={() => deleteTask(task.id)}>
              X
            </button>
        </div>
        )})}
      
      </div>
    </div>
  );
}

export default App
