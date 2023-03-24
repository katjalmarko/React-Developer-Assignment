import { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

interface Todo {
  id: string,
  title: string,
  description: string,
  date: Date,
  completion: boolean,
}

function Tasks() {

// NEW TASK STATES
const [toDoList, setToDoList] = useState<Todo[]>([])
const [newTitle, setNewTitle] = useState<string>("")
const [newDescription, setNewDescription] = useState<string>("")
const [newDate, setNewDate] = useState<Date>(new Date())
const [isCompleted, setIsCompleted] = useState<boolean>(false);
// dorobiť completion!!!!

// UPDATE TITLE STATE
const [updatedTitle, setUpdatedTitle] = useState<string>("")

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

const deleteTask = async (id: string) => {
  try {
    const taskDoc = doc(db, "toDoItems", id)
    await deleteDoc(taskDoc)
    await getToDoList();
    
  } catch (err) {
    console.error(err);
  }  
}  

const updateTaskTitle = async (id: string) => {
  try {
    const taskDoc = doc(db, "toDoItems", id)
    await updateDoc(taskDoc, {title: updatedTitle})
    await getToDoList();
  } catch (err) {
    console.error(err);
  }  
}  

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
    });
      setNewTitle("");
      setNewDescription("");
      setNewDate(new Date());
      setIsCompleted(false);
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
               value={newTitle}
               onChange={(e) => setNewTitle(e.target.value)}
               />
        <input type="text"
               placeholder='Description'
               value={newDescription}
               onChange={(e) => setNewDescription(e.target.value)}
               />
        <input type="datetime-local"
               value={new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
                .toISOString()
                .substring(0, 16)}
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
            <p>Date and Time: {new Date(todo.date).toLocaleString(undefined, {dateStyle: "short", timeStyle: "short"})}</p>
            <p>Completed? </p>
            
            <button onClick={() => deleteTask(todo.id)}>Delete Task</button>

            <input type="text"
                   placeholder='Change the Title'
                   onChange={(e) => setUpdatedTitle(e.target.value)}
                   />
            <button onClick={() => updateTaskTitle(todo.id)}>Update Title</button>       
          </div>
        ))}
      </div>

    </div>
  )
}

export default Tasks