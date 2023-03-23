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
  const [newDate, setNewDate] = useState("")

const toDoItemsCollectionRef = collection(db, "toDoItems")

useEffect(() => {
  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoItemsCollectionRef)
      const filteredData = data.docs.map((doc): Todo => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date,
        completion: doc.data().completion,
        })) 
        
      setToDoList(filteredData);
    } catch (err) {
      console.error(err)
    }
  };

  getToDoList();
}, []);


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
        <input type="date"
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
            <input type="text" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks