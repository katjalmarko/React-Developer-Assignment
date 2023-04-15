import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';


const Navbar = () => {

  const [user] = useAuthState(auth);
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return <div className='flex w-full h-20 items-center justify-between bg-gray-400/20'> 

   <div className='flex ml-10 gap-5'>
    <Link to="/" 
          className='flex items-center justify-center w-24 h-10 
          bg-red-100/10 rounded-3xl 
          hover:bg-red-200/20 
          active:bg-red-300/30'> 
            Tasks 
    </Link>
    <Link to="/contact" 
          className='flex items-center justify-center w-24 h-10 
          bg-red-100/10 rounded-3xl 
          hover:bg-red-200/20 
          active:bg-red-300/30'> 
            Contact 
    </Link>
   </div>

   <h1 className='font-bold text-2xl tracking-widest animate-pulse'>
    Welcome to Task Manager
   </h1>

    <div className='flex items-center gap-12 mr-14'>
      {user && (
        <>
        <div className='flex flex-col items-center'>
          <img className='w-10 h-10 rounded-full'
              src={user?.photoURL || ""}/>
          <p className='text-xs'> 
            {user?.displayName} 
          </p>
        </div>
        <button 
          onClick={logoutOfApp}
          className='flex items-center justify-center w-24 h-10 
          bg-red-100/10 rounded-3xl 
          hover:bg-red-200/20 
          active:bg-red-300/30'
          > 
          Logout 
        </button>
          </>
          )}
    </div>
  </div>
}

export default Navbar