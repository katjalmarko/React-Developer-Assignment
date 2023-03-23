import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

// interface Todo {
//   id: number,
//   title: string,
//   description: string,
//   date: Date,
//   completion: boolean,
// }

  // const [newTitle, setNewTitle] = useState("")
  // const [newDescription, setNewDescription] = useState("")
  // const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState([])

const toDoItemsCollectionRef = collection(db, "toDoItems")

useEffect(() => {
  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoItemsCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id })) 
        // as Todo[];
      setToDoList(filteredData);
    } catch (err) {
      console.error(err)
    }
  };

  getToDoList();
}, []);

function Tasks() {
  return (
    <div>

      <div>
        <input type="text"
                />
      </div>

      <div>
        {toDoList.map((todo) => (
          <div>
            <h1>{todo.title}</h1>
            <p>Description: {todo.description}</p>
            <p>Date: {todo.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks