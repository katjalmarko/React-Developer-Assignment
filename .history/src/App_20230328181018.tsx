import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar';
import { Login } from './pages/login';
import Header from './pages/main/Header';
import Tasks from './pages/create-task/Tasks';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Navbar/></r>
      </Router>
    </div>
  );
}

export default App
