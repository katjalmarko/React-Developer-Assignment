import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { auth } from '../../config/firebase';
import { logout } from '../../features/userSlice';

const Header = () => {

  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
      
      <div className='header-left'>

      </div>
      
      <div className='header-center'>
        <h1>Database of your Tasks</h1>
        <button onClick={logoutOfApp}>Logout</button>
      </div>

      <div className='header-right'>
        {/* User & Login */}
        {/* Filtering of Tasks */}
        {/* ... */}
      </div>

    </div>
  )
}

export default Header