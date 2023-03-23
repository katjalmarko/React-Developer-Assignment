import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

interface Todo {
  id: any,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

function Tasks() {

  const [toDoList, setToDoList] = useState<Todo[]>([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newDate, setNewDate] = useState<Date>(new Date())

const toDoItemsCollectionRef = collection(db, "toDoItems")

useEffect(() => {
  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoItemsCollectionRef)
      const filteredData = data.docs.map((doc): Todo => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date.toDate(),
        completion: doc.data().completion,
        })) 
        
      setToDoList(filteredData);
    } catch (err) {
      console.error(err)
    }
  };

  getToDoList();
}, []);

const createNewTask = () => {
  const newTask: Todo = {
    id: "",
    title: newTitle,
    description: newDescription,
    date: newDate,
    completion: false,
  };
  // add new task to the Firebase Firestore collection
  // and update the local state with the new task
  };

  return (
    <div>

      <div>
        <input type="text"
               placeholder='Title'
               onChange={(e) => setNewTitle}
               />
        <input type="text"
               placeholder='Description'
               onChange={(e) => setNewDescription}
               />
        <input type="datetime-local"
               onChange={(e) => setNewDate}
               />
        <button>
          Create Task
        </button>       
      </div>

      <div>
        {toDoList.map((todo) => (
          <div>
            <h1>{todo.title}</h1>
            <p>Description: {todo.description}</p>
            <p>Date: {todo.date.toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks