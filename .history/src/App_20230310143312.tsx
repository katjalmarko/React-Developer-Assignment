import React from 'react'
import './App.css'
import Header from './components/Header';
import Task from './components/Task';

const App = () => {

  return (
    <div className='App'>
      
      <div>
        <Header />
      </div>
      
      <div>
        <Task />
      </div>

      {/* Filter Task */}

      {/* Footer */}

    </div>
  );
}

export default App