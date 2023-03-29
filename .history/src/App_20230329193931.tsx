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

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({}))
        } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <div>

        </div>
      )}
    </div>
  );
}

export default App
