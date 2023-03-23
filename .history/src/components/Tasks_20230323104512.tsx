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
const [newTitle, setNewTitle] = useState("")
const [newDescription, setNewDescription] = useState("")
const [newDate, setNewDate] = useState<Date>(new Date())
const [isCompleted, setIsCompleted] = useState(false);
// dorobiť completion

const toDoItemsCollectionRef = collection(db, "toDoItems")


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

  useEffect(() => {  
  getToDoList();
}, []);

const createNewTask = async () => {
  await addDoc(toDoItemsCollectionRef, {
    title: newTitle,
    description: newDescription,
    date: newDate,
    completion: isCompleted,
  })};

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