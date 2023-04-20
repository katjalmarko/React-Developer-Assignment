import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, setFilter, setFilterValue, completeTask, uncompleteTask, deleteTask, selectTasks, selectFilter, selectFilterValue } from '../../features/tasksSlice';
import { db, auth } from '../../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import AddTask from './taskManagement/addTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Tasks() {
  const dispatch = useDispatch();
  const toDoList = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const filterValue = useSelector(selectFilterValue);

  const toDoItemsCollectionRef = collection(db, 'toDoItems');

  const getToDoList = async () => {
    try {
      const data = await getDocs(toDoItemsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        date: doc.data().date.toDate(),
        completion: doc.data().completion,
      }));

      dispatch(setTasks(filteredData));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTask = async (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => {
    try {
      await addDoc(toDoItemsCollectionRef, {
        title: newTask.title,
        description: newTask.description,
        date: newTask.date,
        completion: false,
        userId: auth?.currentUser?.uid,
      });
      getToDoList();
      toast("Task added successfully!")
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (value: 'all' | 'completed' | 'ongoing') => {
    dispatch(setFilter(value));
  };

  const handleFilterValueChange = (value: string) => {
    dispatch(setFilterValue(value));
  };

  const handleCompletion = async (taskId: string, isCompleted: boolean) => {
    const taskRef = doc(db, 'toDoItems', taskId);
    try {
      await updateDoc(taskRef, { completion: !isCompleted });
      if (isCompleted) {
        dispatch(uncompleteTask(taskId));
        toast("Task still isn!")
      } else {
        dispatch(completeTask(taskId));
        toast("Task is completed!")
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (taskId: string) => {
    const taskRef = doc(db, 'toDoItems', taskId);
    try {
      await deleteDoc(taskRef);
      dispatch(deleteTask(taskId));
      toast("Task Deleted!")
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  const filteredTasks = toDoList
    .filter((task) => {
      switch (filter) {
        case 'completed':
          return task.completion;
        case 'ongoing':
          return !task.completion;
        default:
          return true;
      }
    })
    .filter((task) =>
      task.title.toLowerCase().includes(filterValue.toLowerCase())
    );



    return (
      <div className="flex flex-col items-center justify-center m-12 mb-80">
        < ToastContainer/>
        <h1 className="text-2xl font-extrabold mb-4 text-white">
          Create your new Task
        </h1>
    
        <AddTask onAddTask={handleAddTask} />
    
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-2xl font-extrabold mb-4 text-white">
            Find the Task you're looking for
          </h1>
          <input
            className="border rounded-md px-4 py-2 w-full sm:w-64 md:w-96 lg:w-64 mb-6 bg-gray-200/20 text-white"
            type="text"
            placeholder="Find by Title"
            value={filterValue}
            onChange={(e) => handleFilterValueChange(e.target.value)}
          />
        </div>
    
        <div className="flex flex-col lg:flex-col items-center lg:justify-center space-x-4 mb-6 mt-6">
          <h1 className="text-2xl font-extrabold mb-4 text-white">
            Filter your Tasks here
          </h1>
          <div className="flex gap-8">
            <button
              className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${
                filter === "all" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleFilterChange("all")}
            >
              All Tasks
            </button>
            <button
              className={`bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded ${
                filter === "completed" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </button>
            <button
              className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ${
                filter === "ongoing" ? "bg-gray-400" : ""
              }`}
              onClick={() => handleFilterChange("ongoing")}
            >
              Ongoing
            </button>
          </div>
        </div>
    
        <h1 className="text-4xl lg:text-5xl font-bold mt-12 mb-10 text-white tracking-widest">
          Your To-Do List
        </h1>
    
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`bg-gray-200/20 h-64 w-80 border rounded-md p-4 rotate-3 transform duration-300 hover:rotate-0 ${
                task.completion ? "bg-green-400/60" : "bg-orange-400/60"
              }`}
            >
              <div className="flex justify-end">
                <div className="h-6 w-6 bg-white border-2 border-gray-600 rounded-full relative">
                  <div className="h-4 w-4 absolute top-0 left-0 bg-gray-600 rounded-full"></div>
                  <div className="h-4 w-4 absolute top-0 left-0 bg-white rounded-full"></div>
                </div>
              </div>
    
              <h6 className="text-center text-2xl font-black text-white text-stroke text-stroke-black">
                {" "}
                {new Date(task.date).toLocaleString(undefined, {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </h6>
              <h3 className="mb-2 text-center text-3xl font-bold mt-4 text-gray-900">
                {task.title}
              </h3>
              <p className="flex flex-col mb-2 mt-4 text-center">
                Description: {task.description}
              </p>
              
      <div className="flex justify-between">
        <button
          onClick={() => handleDelete(task.id)}
          className="bg-red-700/90 hover:bg-red-800/90 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Delete Task
        </button>
        <button
          className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-4 ${
            task.completion ? "bg-orange-500/80 hover:bg-orange-700/80" : ""
          }`}
          onClick={() => handleCompletion(task.id, task.completion)}
        >
          {task.completion ? "Undo Task" : "Complete Task"}
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Tasks