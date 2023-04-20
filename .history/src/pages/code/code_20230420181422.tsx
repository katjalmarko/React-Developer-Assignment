import React from 'react';

const code = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ textShadow: '0 0 10px black' }}>
      <div className="w-full max-w-3xl p-8 mt-10 mb-10 mr-5 ml-5 bg-gray-700/60 border border-black rounded-lg shadow-md text-white">
        <h1 className="text-5xl mb-10 font-black text-center">Code & Technologies</h1>
        <p className="mb-4 text-center">
          This ToDo list web application was designed and developed as an assignment for a React Developer position. The app
          showcases a variety of modern web development techniques and technologies, ensuring a clean, maintainable, and
          efficient codebase.
        </p>
        
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
      </div>
    </div>
  );
};

export default code;
