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
    <div className="flex flex-col items-center m-12">
      
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
          placeholder='Type your Task'
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {filteredToDoList.map((task) => (
  <div key={task.id} className="flex items-center bg-gray-100 p-4 rounded-md mb-4 w-full">
    <div className="flex-1">
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-gray-600">{task.date.toString()}</p>
    </div>
    {task.completion ? (
      <button
        onClick={() => uncompleteTask(task.id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Undo
      </button>
    ) : (
      <button
        onClick={() => completeTask(task.id)}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
      >
        Complete
      </button>
    )}
    <button
      onClick={() => deleteTask(task.id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
    >
      Delete
    </button>
  </div>
))}
              <button
                className={`bg-orange-500/80 hover:bg-orange-700/80 text-white font-bold py-2 px-4 rounded mt-2 
                              ${task.completion ? 'bg-green-600/80 hover:bg-green-800/80' : ''}`}
                onClick={() => {
                  if (todo.completion) {
                    uncompleteTask(todo.id)
                  } else {
                    completeTask(todo.id)
                  }}}
                  >
                {todo.completion ? 'Completed Task' : 'Ongoing Task'}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks