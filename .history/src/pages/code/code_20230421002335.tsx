import React from 'react';

const Code: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ textShadow: '0 0 10px black' }}>
      <div className="w-full max-w-3xl p-8 mt-10 mb-10 mr-5 ml-5 bg-gray-700/60 border border-black rounded-lg shadow-md text-white">
        <h1 className="text-5xl mb-10 font-black text-center">Code & Technologies</h1>
        <p className="mb-4 text-center">
          This ToDo list web application was designed and developed as an assignment for a React Developer position. The app
          showcases a variety of modern web development techniques and technologies, ensuring a clean, maintainable, and
          efficient codebase.
        </p>
        <p className="text-2xl font-bold mt-20 mb-10 text-center">
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
        <h3 className="text-2xl font-bold mt-20 mb-10 text-center">
          The application provides users with the ability to create, manage, and track tasks, offering the following key
          features:
        </h3>
        <ul className="list-disc pl-6 mb-4 text-center mx-auto" style={{ maxWidth: '32rem' }}>
          <li>Intuitive task management with names and items</li>
          <li>Seamless addition of new tasks to a list</li>
          <li>Task attributes: caption, free text, and deadline</li>
          <li>Convenient task removal</li>
          <li>Task completion tracking</li>
          <li>Effortless item filtering and searching</li>
          <li>Real-time data persistence with Firebase</li>
        </ul>
        <div className="flex flex-col gap-8 text-large font-bold pl-6 mb-6 text-center mx-auto animate-pulse" style={{ maxWidth: '32rem' }>
            <a href="https://github.com/katjalmarko/React-Developer-Assignment#readme" target="_blank" rel="noopener noreferrer">
              Complete Assignment Here!
            </a>
        </div>
      </div>
    </div>
  );
};

export default Code;
