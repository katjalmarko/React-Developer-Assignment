import React from 'react'
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: any; /* dorobiť potom */
}

const App = () => {

  const [newTask, setNewTask] = useState<string>("")
  const [toDoList, setToDoList] = useState<Todo[]>([])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newToDo: Todo = {
      id: Math.floor(Math.random()* 1000),
      title: newTask,
      description: ''
    };
    setToDoList([...toDoList, newTask])
  }

  const confirmTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewTask("")
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
          return (
            <div>
            <h1>{task}</h1>
            <button onClick={deleteTask}>
              X
            </button>
        </div>
        )})}
      
      </div>
    </div>
  );
}

export default App
