import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-gray-700 border border-black rounded-lg shadow-md text-white">
        <h1 className="text-4xl mb-6 font-bold text-center">Contact</h1>
        <div className="mb-6">
          <div className="text-center">
            <img
              src="YOUR_PHOTO_URL_HERE"
              alt="Your Name"
              className="mx-auto w-32 h-32 mb-4 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-center mb-4">
            Something about me: I am a 23-year-old Slovakian who has been continuously educating myself in the field of health since a young age. I've also been coaching other people in this area, and that is what I do for a living at the moment.
          </p>
          <p className="text-center mb-4">
            This flexible online job offers me the freedom and time to code, which I try to do all day long, even on weekends, as I see it as the most meaningful skill I can devote my energy to. Programming is a top priority for me, and I subordinate my whole life to it.
          </p>
          <p className="text-center">
            I would love to meet new ambitious people in the coding field with whom we can move forward and create something significant together.
          </p>
          <p className="text-center mt-4">
            I'm currently looking for a front-end or full-stack web developer position. I'm motivated to learn fast and become a valuable team member.
          </p>
          <p className="text-center mt-4 mb-6">
            💬 If you are interested in me, I would be glad to have a conversation.
          </p>
        </div>
        <h2 className="text-2xl mb-4 font-semibold text-center">My Projects</h2>
        <ul className="list-disc pl-6 mb-6 text-center mx-auto" style={{ maxWidth: '32rem' }}>
          <li>
            <a href="https://github.com/katjalmarko/ChatGPT-3-Custom" target="_blank" rel="noopener noreferrer">
              ChatGPT - Custom
            </a>
          </li>
          <li>
            <a href="https://github.com/katjalmarko/DALL-E-2.0-clone" target="_blank" rel="noopener noreferrer">
              Dall-E-2.0 - Custom
            </a>
          </li>
          <li>
            <a href="https://github.com/katjalmarko/LinkedIn_clone" target="_blank" rel="noopener noreferrer">
              LinkedIn - Clone
            </a>
          </li>
        </ul>
        <h2 className="text-2xl mb-4 font-semibold text-center">Find me on</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/marko-katjal-90ab3320b/" target="_blank" rel="noopener noreferrer">
            
};

export default Contact;
