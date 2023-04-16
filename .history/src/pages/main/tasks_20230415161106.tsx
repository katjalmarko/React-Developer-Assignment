import { useEffect, useState } from 'react';
import { db, auth } from "../../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
// import { useDispatch, useSelector } from 'react-redux';
// import { addTask, completeTask, deleteTask, selectToDoList } from '../../features/tasksSlice';


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
const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
const [filterValue, setFilterValue] = useState<string>("");

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


const handleFilterChange = (value: 'all' | 'completed' | 'ongoing') => {
  setFilter(value);
};

const filteredToDoList = toDoList.filter((task) => {
  if (filter === 'all') {
    return true;
  } else if (filter === 'completed') {
    return task.completion;
  } else {
    return !task.completion;
  }
}).filter((task) => {
  return task.title.toLowerCase().includes(filterValue.toLowerCase());
});


const completeTask = async (id: string) => {
    try {
      const taskDoc = doc(db, "toDoItems", id);
      await updateDoc(taskDoc, { completion: true });
      const updatedToDoList = toDoList.map((task) =>
        task.id === id ? { ...task, completion: true } : task
      );
      setToDoList(updatedToDoList);
    } catch (err) {
      console.error(err);
    }
  };

const uncompleteTask = async (id: string) => {
  try {
    const taskDoc = doc(db, "toDoItems", id);
    await updateDoc(taskDoc, { completion: false });
    const updatedToDoList = toDoList.map((task) =>
      task.id === id ? { ...task, completion: false } : task
    );
    setToDoList(updatedToDoList);
  } catch (err) {
    console.error(err);
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

const addTask = async () => {
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
    <div className="flex flex-col items-center m-12 mb-80">
      
      <h1 className="text-2xl font-bold mb-6">Create your new Task</h1>
      
      <div className="flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4 w-full mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border rounded-md px-4 py-2 w-full lg:w-56"
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border rounded-md px-4 py-2 w-full lg:w-96"
        />
        <input
          type="datetime-local"
          value={new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
            .toISOString()
            .substring(0, 16)}
          onChange={(e) => setNewDate(new Date(e.target.value))}
          className="border rounded-md px-4 py-2 w-full lg:w-48"
        />
        <button
          onClick={addTask}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full lg:w-auto"
        >
          Create Task
        </button>
      </div>
  
      <div className='flex items-center'>
        <h1 className="text-lg font-bold mb-4 mr-6">Find the Task you're looking for</h1>
        <input 
          className="border rounded-md px-4 py-2 w-full lg:w-64 mb-6"
          type="text" 
          placeholder='Type the Title'
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>

  
      <div className="flex flex-col items-center lg:flex-row lg:justify-center space-x-4 mb-6">
        <h1 className="text-lg font-bold">Filter your Tasks here</h1>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            filter === 'all' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilterChange('all')}
        >
          All Tasks
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            filter === 'completed' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${
            filter === 'ongoing' ? 'bg-gray-400' : ''
          }`}
          onClick={() => handleFilterChange('ongoing')}
        >
          Ongoing
        </button>
      </div>
      
  
      <h1 className="text-2xl font-bold mt-12 mb-6">Your To-Do List</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {filteredToDoList.map((todo) => (
    <div key={todo.id} className={`bg-gray-200/20 border rounded-md p-4 rotate-3 transform duration-300 hover:rotate-0  hover:bg-gray-600/20 ${todo.completion ? 'bg-green-400/50' : ''}`}>
            <he className="text-center text-xl font-extrabold">
              Finish until:{" "}
                {new Date(todo.date).toLocaleString(undefined, {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
            </he>
            <h4 className="text-lg font-bold mb-2">Title: {todo.title}</h4>
            <p className="mb-2">Description: {todo.description}</p>
              
            <div className='flex justify-between'>
              <button
                onClick={() => deleteTask(todo.id)}
                className="bg-red-500/80 hover:bg-red-700/80 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Delete Task
              </button>
              <button
                className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-2 
                              ${todo.completion ? 'bg-orange-600/80 hover:bg-orange-800/80' : ''}`}
                onClick={() => {
                  if (todo.completion) {
                    uncompleteTask(todo.id)
                  } else {
                    completeTask(todo.id)
                  }}}
                  >
                {todo.completion ? 'Undo Task' : 'Complete Task'}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks