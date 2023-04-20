import React from 'react';

const code = () => {
  return (
    <div className='flex items-center mt-6 text-white font-black animate-pulse'>
      <div className="p-8">
      <h1 className="text-4xl mb-6 font-bold">Code & Technologies</h1>
      <p className="mb-4">In this project, I built a ToDo list web application with the following functionalities:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>ToDo list with name and ToDo items</li>
        <li>Adding a ToDo item to the list</li>
        <li>ToDo item properties: caption, free text, deadline (date and time)</li>
        <li>Deleting a ToDo item</li>
        <li>Marking the ToDo as completed</li>
        <li>Filter items (all, active, completed)</li>
        <li>Search for ToDo items within the list</li>
        <li>Persisting ToDo lists using Firebase</li>
      </ul>
      <p className="mb-4">I used the following technologies and libraries:</p>
      <ul className="list-disc pl-6">
        <li>TypeScript</li>
        <li>React (hooks, functional components, data management)</li>
        <li>Advanced EcmaScript and TypeScript constructs</li>
        <li>React Router</li>
        <li>Redux Toolkit</li>
        <li>Firebase (Firestore Database)</li>
        <li>Material-UI (v5) with styled components</li>
        <li>Validated forms (formik, useFormHook in combination with joi, yup)</li>
        <li>Reasonable structuring of application source code</li>
        <li>Tailwind CSS for styling</li>
      </ul>
    </div>
    </div>
  );
};

export default code;
