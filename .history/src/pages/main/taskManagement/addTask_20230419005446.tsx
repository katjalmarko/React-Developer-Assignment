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
    .min(new Date(), 'Date must be of present or future time')
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
    <Formik
      initialValues={{
        title: '',
        description: '',
        date: new Date(),
      }}
      validationSchema={AddTaskSchema}
      onSubmit={(values, { resetForm }) => {
        onAddTask({
          title: values.title,
          description: values.description,
          date: values.date,
        });
        resetForm();
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="flex flex-col sm:flex-col md:flex-row lg:flex-row lg:justify-center space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0 lg:space-x-4 w-full mb-6">
          <div className="w-full sm:w-56 md:w-64 lg:w-56">
            <Field
              name="title"
              type="text"
              placeholder="Title"
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white"
            />
            <ErrorMessage name="title" component="div" className="text-red-500 font-bold" />
          </div>
  
          <div className="w-full sm:w-56 md:w-96 lg:w-96">
            <Field
              name="description"
              type="text"
              placeholder="Description"
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 font-bold" />
          </div>
  
          <div className="w-full sm:w-48 md:w-48 lg:w-48">
            <input
              name="date"
              type="datetime-local"
              value={new Date(values.date.getTime() - values.date.getTimezoneOffset() * 60000)
                .toISOString()
                .substring(0, 16)}
              onChange={(e) => setFieldValue("date", new Date(e.target.value))}
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white"
            />
            <ErrorMessage name="date" component="div" className="text-red-500 font-bold" />
          </div>
  
          <button
            type="submit"
            className="bg-gray-400/40 hover:bg-gray-500/80 text-white font-bold py-2 px-4 rounded lg: w-10 h-2"
            onClick={() => handleSubmit}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
  };
  
  export default AddTask;