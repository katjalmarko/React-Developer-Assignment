import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar';
import { Login } from './pages/login';
import { Main } from './pages/main/main';
import {  }

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={< />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App
