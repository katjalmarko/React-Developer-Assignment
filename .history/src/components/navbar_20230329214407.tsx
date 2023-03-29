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

  return <div className='flex w-screen h-20 items-center justify-between bg-gray-400/20'> 

   <div className='flex ml-10 gap-5'>
    <Link to="/" className='w-14 h-8 bg-slate'> Tasks </Link>
    <Link to="/code"> Code </Link>
    <Link to="/contact"> Contact </Link>
   </div>

   <h1 className='font-bold text-2xl tracking-widest animate-pulse'>
    Welcome to Task Manager
   </h1>

    <div className='flex gap-12 mr-14'>
      {user && (
        <>
        <div className='flex flex-col items-center'>
          <img className='w-10 h-10 rounded-full'
              src={user?.photoURL || ""}/>
          <p className='text-xs'> 
            {user?.displayName} 
          </p>
        </div>
        <button onClick={logoutOfApp}> Logout </button>
          </>
          )}
    </div>
  </div>
}

export default Navbar