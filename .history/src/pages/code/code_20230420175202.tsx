import React from 'react';

const code = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 mt- bg-gray-700/60 border border-black rounded-lg shadow-md text-white">
        <h1 className="text-4xl mb-6 font-bold text-center">Code & Technologies</h1>
        <p className="mb-4 text-center">
          This ToDo list web application was designed and developed as an assignment for a React Developer position. The app
          showcases a variety of modern web development techniques and technologies, ensuring a clean, maintainable, and
          efficient codebase.
        </p>
        <p className="mb-4 text-center">
          The application provides users with the ability to create, manage, and track tasks, offering the following key
          features:
        </p>
        <ul className="list-disc pl-6 mb-4 text-center mx-auto" style={{ maxWidth: '32rem' }}>
          <li>Intuitive task management with names and items</li>
          <li>Seamless addition of new tasks to a list</li>
          <li>Task attributes: caption, free text, and deadline</li>
          <li>Convenient task removal</li>
          <li>Task completion tracking</li>
          <li>Effortless item filtering and searching</li>
          <li>Real-time data persistence with Firebase</li>
        </ul>
        <p className="mb-4 text-center">
          Leveraging a diverse array of technologies and libraries, this project demonstrates proficiency in the following
          areas:
        </p>
        <ul className="list-disc pl-6 text-center mx-auto" style={{ maxWidth: '32rem' }}>
          <li>TypeScript for strong typing and maintainability</li>
          <li>React with hooks, functional components, and data management</li>
          <li>Advanced EcmaScript and TypeScript constructs</li>
          <li>React Router for seamless navigation</li>
          <li>Redux Toolkit for state management</li>
          <li>Firebase Firestore for real-time data storage</li>
          <li>Material-UI (v5) with styled components for a sleek UI</li>
          <li>Formik and useFormHook with joi/yup for form validation</li>
          <li>Effective application source code organization</li>
          <li>Tailwind CSS for responsive and elegant styling</li>
        </ul>
      </div>
    </div>
  );
};

export default code;
