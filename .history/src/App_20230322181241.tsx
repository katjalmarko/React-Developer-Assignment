import React from 'react'
import './App.css'
import Auth from './components/Auth';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  return (
    <div className='App'>

      <div>
        <Auth />
      </div>
      
      <div>
        <Header />
      </div>
      
      <div>
        <Tasks />
      </div>

      <div>
        {/* Filter Task */}
      </div>

      <div>
        {/* Footer */}
      </div>

    </div>
  );
}

export default App
