import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar';
import { Login } from './pages/login';
import Main from './pages/main/main';
import CreateTask from './pages/create-task/create-task' 

const App = () => {

  return (
    <div className='App'>
      <Router>
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/task' element={<Main />} />
          <Route path='/createtask' element={<CreateTask />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
