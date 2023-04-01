import { useEffect, useState } from 'react';
import { db, auth } from "../../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import Header from './header';


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
    userId: auth?.currentUser?.uid,
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
    <div className="flex flex-col items-center mt-6">
      
      <h1 className="text-lg font-bold">Create your new Task</h1>
      <div className="flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 mt-4 lg:space-x-4 lg:w-full">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full lg:w-auto border rounded-md px-4 py-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full lg:w-auto border rounded-md px-4 py-2"
        />
        <input
          type="datetime-local"
          value={new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
            .toISOString()
            .substring(0, 16)}
          onChange={(e) => setNewDate(new Date(e.target.value))}
          className="w-full lg:w-auto border rounded-md px-4 py-2"
        />
        <button
          onClick={createNewTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-auto"
        >
          Create Task
        </button>
      </div>
  
      <h1 className="text-lg font-bold mt-12">Your To-Do List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {toDoList.map((todo) => (
          <div key={todo.id} className="border rounded-md p-4">
            <h1 className="text-lg font-bold">{todo.title}</h1>
            <p className="mt-2">Description: {todo.description}</p>
            <p className="mt-2">
              Date and Time:{" "}
              {new Date(todo.date).toLocaleString(undefined, {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
            <p className="mt-2">Completed? </p>
  
            <button
              onClick={() => deleteTask(todo.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks