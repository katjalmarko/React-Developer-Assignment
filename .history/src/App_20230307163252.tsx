import React from 'react'
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  description: string;
  date: any; /* dorobiť potom */
}

const App = () => {

  const [newTitle, setNewTitle] = useState<string>("")
  const [new] = useState()
  const [toDoList, setToDoList] = useState<Todo[]>([])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const newToDo: Todo = {
      id: Math.floor(Math.random()* 1000),
      title: newTask,
      description: '',
      date: new Date(),
    };
    setToDoList([...toDoList, newToDo]);
    setNewTask("");
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
      <input type="text"
             value={}
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
