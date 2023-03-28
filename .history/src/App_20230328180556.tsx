import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar';
import { Login } from './pages/login';
import Header from './pages/main/Header';
import Tasks from './pages/create-task/Tasks';

const App = () => {

  return (
    <div className='App'>

      <div>
        <Login />
      </div>
      
      <div>
        <Header />
        {/* Footer */}
      </div>
      
      <div>
        <Tasks />
        {/* Filter Task */}
      </div>

    </div>
  );
}

export default App
