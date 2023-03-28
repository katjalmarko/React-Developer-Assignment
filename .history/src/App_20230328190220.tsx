import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar';
import { Login } from './pages/login';
import Tasks from './pages/main/tasks';

const App = () => {

  return (
    <div className='App'>
      {!user<> ? (
        <Login />
      ) : (
        <Tasks/>
      )}
    </div>
  );
}

export default App
