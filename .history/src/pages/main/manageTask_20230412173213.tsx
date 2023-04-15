import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './';

interface Props {}

const ManageTask: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [newDate, setNewDate] = useState<Date>(new Date());
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewDescription(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(new Date(event.target.value));
  };

  const handleCompletionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCompleted(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: Math.random().toString(36).substring(2, 9),
        title: newTitle,
        description: newDescription,
        date: newDate,
        completion: isCompleted,
      })
    );
    setNewTitle('');
    setNewDescription('');
    setNewDate(new Date());
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4 w-full mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={handleTitleChange}
          className="border rounded-md px-4 py-2 w-full lg:w-56"
        />
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={handleDescriptionChange}
          className="border rounded-md px-4 py-2 w-full lg:w-56"
        />
        <input
          type="date"
          placeholder="Date"
          value={newDate.toISOString().substring(0, 10)}
          onChange={handleDateChange}
          className="border rounded-md px-4 py-2 w-full lg:w-56"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCompletionChange}
            className="mr-2"
          />
          <label className="cursor-pointer">Completed</label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default ManageTask;