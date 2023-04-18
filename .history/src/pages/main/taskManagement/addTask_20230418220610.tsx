import { useState } from 'react';

interface AddTaskProps {
  onAddTask: (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => void;
}

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
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:justify-center space-y-