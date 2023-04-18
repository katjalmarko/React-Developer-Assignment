import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getToDoList,
  setFilter,
  setFilterValue,
  completeTask,
  uncompleteTask,
  deleteTask,
} from "../../features/tasksSlice";
import AddTask from "./taskManagement/addTask";

interface Todo {
  id: string;
  title: string;
  description: string;
  date: Date;
  completion: boolean;
}

function Tasks() {
  const dispatch = useDispatch();
  const { toDoList, filter, filterValue } = useSelector((state) => state.tasks);

  const handleFilterChange = (value: "all" | "completed" | "ongoing") => {
    dispatch(setFilter(value));
  };

  const handleFilterValueChange = (value: string) => {
    dispatch(setFilterValue(value));
  };

  const handleCompletion = async (taskId: string, isCompleted: boolean) => {
    if (isCompleted) {
      dispatch(uncompleteTask(taskId));
    } else {
      dispatch(completeTask(taskId));
    }
  };

  const handleDelete = async (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  useEffect(() => {
    dispatch(getToDoList());
  }, [dispatch]);

  const filteredTasks = toDoList
    .filter((task: Todo) => {
      switch (filter) {
        case "completed":
          return task.completion;
        case "ongoing":
          return !task.completion;
        default:
          return true;
      }
    })
    .filter((task: Todo) =>
      task.title.toLowerCase().includes(filterValue.toLowerCase())
    );


  return (
    <div className="flex flex-col items-center m-12 mb-80">
  <h1 className="text-2xl font-extrabold mb-4 text-white">Create your new Task</h1>

  <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:justify-center space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0 lg:space-x-4 w-full mb-6">
    <input
      type="text"
      placeholder="Title"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      className="border rounded-md px-4 py-2 w-full sm:w-56 md:w-64 lg:w-56 bg-gray-200/20 text-white"
    />
    <input
      type="text"
      placeholder="Description"
      value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
      className="border rounded-md px-4 py-2 w-full sm:w-56 md:w-96 lg:w-96 bg-gray-200/20 text-white"
    />
    <input
      type="datetime-local"
      value={new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 16)}
      onChange={(e) => setNewDate(new Date(e.target.value))}
      className="border rounded-md px-4 py-2 w-full sm:w-48 md:w-48 lg:w-48 bg-gray-200/20 text-white"
    />
    <button
      onClick={addTask}
      className="bg-gray-400/40 hover:bg-gray-500/80 text-white font-bold py-2 px-4 rounded w-full sm:w-auto md:w-auto lg:w-auto"
    >
      Submit
    </button>
  </div>

      <div className=''>
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-2xl font-extrabold mb-4 text-white">Find the Task you're looking for</h1>
          <input
            className="border rounded-md px-4 py-2 w-full sm:w-64 md:w-96 lg:w-64 mb-6 bg-gray-200/20 text-white"
            type="text"
            placeholder="Find by Title"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>

    
        <div className="flex flex-col lg:flex-col items-center lg:justify-center space-x-4 mb-6 mt-6">
          <h1 className="text-2xl font-extrabold mb-4 text-white">Filter your Tasks here</h1>
          <div className='flex gap-8'>
          <button
            className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${
              filter === 'all' ? 'bg-gray-400' : ''
            }`}
            onClick={() => handleFilterChange('all')}
          >
            All Tasks
          </button>
          <button
            className={`bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded ${
              filter === 'completed' ? 'bg-gray-400' : ''
            }`}
            onClick={() => handleFilterChange('completed')}
          >
            Completed
          </button>
          <button
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ${
              filter === 'ongoing' ? 'bg-gray-400' : ''
            }`}
            onClick={() => handleFilterChange('ongoing')}
          >
            Ongoing
          </button>
        </div>
        </div>
      </div>
      
  
      <h1 className="text-5xl font-bold mt-12 mb-10 text-white tracking-widest">Your To-Do List</h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredToDoList.map((todo) => (
          <div key={todo.id} 
               className={`bg-gray-200/20 h-64 w-80 border rounded-md p-4 rotate-3 transform duration-300 hover:rotate-0 ${todo.completion ? 'bg-green-400/60' : 'bg-orange-400/60'}`}>
              <div className="flex justify-end">
                <div className="h-6 w-6 bg-white border-2 border-gray-600 rounded-full relative">
                  <div className="h-4 w-4 absolute top-0 left-0 bg-gray-600 rounded-full"></div>
                  <div className="h-4 w-4 absolute top-0 left-0 bg-white rounded-full"></div>
                </div>
              </div>

              <h6 className="text-center text-2xl font-black text-white text-stroke text-stroke-black">
                  {" "}
                  {new Date(todo.date).toLocaleString(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
              </h6>
              <h3 className="mb-2 text-center text-3xl font-bold mt-4 text-gray-900">{todo.title}</h3>
              <p className="flex flex-col mb-2 mt-4 text-center">Description: {todo.description}</p>
              
            <div className='flex justify-between'>
              <button
                onClick={() => deleteTask(todo.id)}
                className="bg-red-700/90 hover:bg-red-800/90 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Delete Task
              </button>
              <button
                className={`bg-green-600/80 hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded mt-4 
                              ${todo.completion ? 'bg-orange-500/80 hover:bg-orange-700/80' : ''}`}
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