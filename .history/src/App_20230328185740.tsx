import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar';
import { Login } from './pages/login';

import CreateTask from './pages/main/tasks' 

const App = () => {

  return (
    <div className='App'>
      <Router>
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/database' element={<Main />} />
          <Route path='/createtask' element={<CreateTask />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
