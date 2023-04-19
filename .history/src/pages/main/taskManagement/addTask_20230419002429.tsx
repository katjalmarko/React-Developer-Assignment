import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface AddTaskProps {
  onAddTask: (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => void;
}

const AddTaskSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .max(14, 'Title must be at most 14 characters')
    .required('Title is required'),
  description: Yup.string()
    .min(3, 'Description must be at least 3 characters')
    .max(100, 'Description must be at most 100 characters')
    .required('Description is required'),
  date: Yup.date()
    .min(new Date(), 'Date must be present or future')
    .required('Date is required'),
});

export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [newDate, setNewDate] = useState<Date>(new Date());

  const handleSubmit = () => {
    onAddTask({ title: newTitle, description: newDescription, date: newDate });
    setNewTitle('');
    setNewDescription('');
    setNewDate(new Date());
  };

  return (
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
      onClick={handleSubmit}
      className="bg-gray-400/40 hover:bg-gray-500/80 text-white font-bold py-2 px-4 rounded w-full sm:w-auto md:w-auto lg:w-auto"
    >
      Submit
    </button>
  </div>
    );
  };
  
  export default AddTask;