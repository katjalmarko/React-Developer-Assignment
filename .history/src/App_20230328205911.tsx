import './App.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './config/firebase';
import Login from './pages/login';
import Tasks from './pages/main/tasks';

const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <Tasks/>
      )}
    </div>
  );
}

export default App
