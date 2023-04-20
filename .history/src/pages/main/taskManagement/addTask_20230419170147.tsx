import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddTaskProps {
  onAddTask: (newTask: {
    title: string;
    description: string;
    date: Date;
  }) => void;
}

const AddTaskSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'At least 3 characters!')
    .max(14, '14 characters At most!')
    .required('Title is required!'),
  description: Yup.string()
    .min(3, 'At least 3 characters!')
    .max(100, '100 characters At most!')
    .required('Description is required!'),
  date: Yup.date()
    .min(new Date(), 'Time is Up!')
    .required('Date is required!'),
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
        <Form className="flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 w-full mb-6">
          <div className="flex flex-col w-full sm:w-56 md:w-64 lg:w-56">
            <Field
              name="title"
              type="text"
              placeholder="Title"
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white font-bold text-2xl h-14"
            />
            <ErrorMessage name="title" component="div" className="flex justify-center text-red-500 font-bold mt-2" />
          </div>
  
          <div className="flex flex-col w-full sm:w-96">
            <Field
              name="description"
              type="text"
              placeholder="Description"
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white font-bold text-2xl h-14"
            />
            <ErrorMessage name="description" component="div" className="flex justify-center text-red-500 font-bold mt-2" />
          </div>
  
          <div className="flex flex-col lg:w-72 sm:w-48">
            <input
              name="date"
              type="datetime-local"
              value={new Date(values.date.getTime() - values.date.getTimezoneOffset() * 60000)
                .toISOString()
                .substring(0, 16)}
              onChange={(e) => setFieldValue("date", new Date(e.target.value))}
              className="border rounded-md px-4 py-2 w-full bg-gray-200/20 text-white font-bold text-2xl h-14"
            />
            <ErrorMessage name="date" component="div" className="flex justify-center text-red-500 font-bold mt-2" />
          </div>
  
          <div className="flex flex-col w-full sm:w-auto">
            <button>
              type="button"
              className="bg-gray-400/40 hover:bg-gray-500/80 text-white font-bold text-2xl py-2 px-4 rounded w-full h-14 cursor-pointer"
              onClick={() => handleSubmit}
              value='Submit'
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
  };
  
  export default AddTask;