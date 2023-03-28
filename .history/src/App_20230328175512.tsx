import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar';
import Auth from './components/Auth';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  return (
    <div className='App'>

      {/* <div>
        <Auth />
      </div>
      
      <div>
        <Header />
        {/* Footer */}
      </div>
      
      <div>
        <Tasks />
        {/* Filter Task */}
      </div> */}

    </div>
  );
}

export default App
