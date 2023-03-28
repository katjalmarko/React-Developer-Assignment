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
          <Route path='/main' element={<Main />} />
          <Route path='/createpost' element={<CreateTask />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
