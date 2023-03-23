import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";


  // const [newTitle, setNewTitle] = useState("")
  // const [newDescription, setNewDescription] = useState("")
  // const [newDate, setNewDate] = useState("")
  const [toDoList, setToDoList] = useState()


const toDoListCollectionRef = collection(db, "toDoList")

useEffect(() => {
  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoListCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id })) 
        // as Todo[];

      // doc does not return the id, so I gotta add it manually
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
        {toDoList.map((todo) => (
          <div>
            <h1></h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks