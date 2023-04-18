import React, { useState } from 'react';
import { addTask } from '../../../';

interface AddTaskProps {
  onAddTask: typeof addTask;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
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
      {/* Your existing input and button components */}
    </div>
  );
};

export default AddTask;