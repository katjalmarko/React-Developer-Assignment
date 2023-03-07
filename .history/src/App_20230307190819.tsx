import React from 'react'
import { useState } from 'react';
import Title from './components/Title';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: Date;
}

const App = () => {

  const [newDescription, setNewDescription] = useState("")
  const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState<Todo[]>([])


  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value)
  }

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value)
  }

  const addTask = () => {
    const newToDo: Todo = {
      id: Math.floor(Math.random()* 1000),
      title: props.newTitle,
      description: newDescription,
      date: new Date(newDate),
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
    const filteredToDos = toDoList.filter((task) => 
    task.id !== id)
    setToDoList(filteredToDos)
  }

  return (
    <div className='App'>
      
      <form onSubmit={confirmTask}>
      <input type="text"
             value={props.newTitle}
             placeholder="Type your task"
             onChange={props.handleTitle}
             />
      <input type="text"
             value={newDescription}
             placeholder="Type your description"
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
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <p>{task.date.toLocaleString()}</p>
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
