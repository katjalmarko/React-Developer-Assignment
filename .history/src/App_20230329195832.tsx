import './App.css'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './config/firebase';
import Login from './pages/login';
import Tasks from './pages/main/tasks';
import Navbar from './components/navbar';
import Contact from './pages/contact/contact';
import Code from './pages/code/code';

const App = () => {

  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Router>
            <Navbar />
              <Routes>
                <Route path='/' element={<Tasks />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/code' element={<Code/> } />
              </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App
