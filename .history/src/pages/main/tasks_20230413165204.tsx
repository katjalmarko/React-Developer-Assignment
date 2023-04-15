import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  completeTask,
  deleteTask,
  selectToDoList,
} from './tasksSlice';

interface Todo {
  id: string;
  title: string;
  description: string;
  date: Date;
  completion: boolean;
}

function Tasks() {
  const dispatch = useDispatch();
  const toDoList = useSelector(selectToDoList);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState(new Date());

  const handleAddTask = () => {
    const task: Todo = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
      date: newDate,
      completion: false,
    };
    dispatch(addTask(task));
    setNewTitle('');
    setNewDescription('');
    setNewDate(new Date());
  };

  const handleCompleteTask = (id: string) => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={newDate.toISOString().substring(0, 10)}
          onChange={(e) => setNewDate(new Date(e.target.value))}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div>
        <h2>Tasks List</h2>
        {toDoList.length > 0 ? (
          <ul>
            {toDoList.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completion}
                  onChange={() => handleCompleteTask(task.id)}
                />
                {task.title} - {task.description} - {task.date.toISOString().substring(0, 10)}
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks to display.</p>
        )}
      </div>
    </div>
  );
}

export default Tasks;