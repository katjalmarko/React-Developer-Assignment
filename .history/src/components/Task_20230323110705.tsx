import React, { useEffect, useState } from 'react';
import './Task.css';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";


interface Todo {
  id: number,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

const Task = () => {

  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState<Todo[]>([])


  // const toDoListCollectionRef = collection(db, "toDoList")

  // useEffect(() => {
  //   const getToDoList = async () => {
  //     try {
  //       const data = await getDocs(toDoListCollectionRef)
  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(), 
  //         id: doc.id })) as Todo[];
  //       // doc does not return the id, so I gotta add it manually
  //       setToDoList(filteredData);
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   };

  //   getToDoList();
  // }, []);

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
    <div className='Task'>

      <div className='AddTask'>
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
              onChange={handleDate}
              />         
        <button onClick={addTask}>
          Add Task
        </button>    
        </form>
      </div>

      <div className='CreatedTask'>
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

    </div>
  )
}

export default Task







import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

interface Todo {
  id: string,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

function Tasks() {

const [toDoList, setToDoList] = useState<Todo[]>([])
const [newTitle, setNewTitle] = useState<string>("")
const [newDescription, setNewDescription] = useState<string>("")
const [newDate, setNewDate] = useState<Date>(new Date())
const [isCompleted, setIsCompleted] = useState<boolean>(false);
// dorobiť completion

const toDoItemsCollectionRef = collection(db, "toDoItems")


const getToDoList = async () => {
  try {
    const data = await getDocs(toDoItemsCollectionRef)
    const filteredData = data.docs.map((doc): Todo => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      date: doc.data().date.toLocaleDate(),
      completion: doc.data().completion,
      })); 
        
      setToDoList(filteredData);
    } catch (err) {
      console.error(err)
    }
  };

useEffect(() => {  
  getToDoList();
}, []);

const createNewTask = async () => {
  try {
  await addDoc(toDoItemsCollectionRef, {
    title: newTitle,
    description: newDescription,
    date: newDate,
    completion: isCompleted,
    })
      getToDoList();
      } catch (err) {
        console.error(err);
      }
  };

  return (
    <div>

      <div>
        <input type="text"
               placeholder='Title'
               onChange={(e) => setNewTitle(e.target.value)}
               />
        <input type="text"
               placeholder='Description'
               onChange={(e) => setNewDescription(e.target.value)}
               />
        <input type="datetime-local"
               onChange={(e) => setNewDate(new Date(e.target.value))}
               />
        <button onClick={createNewTask}>
          Create Task
        </button>       
      </div>

      <div>
        {toDoList.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>Description: {todo.description}</p>
            <p>Date: {todo.date.toLocaleDateString()}</p>
            <p>Completed? </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks