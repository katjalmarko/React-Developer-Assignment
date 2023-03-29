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
    <Link to="/"> Tasks </Link>
    <Link to="/code"> Code </Link>
    <Link to="/contact"> Contact </Link>
   </div>

    <div className='flex gap-1 mr-20'>
      {user && (
        <>
        <div className='flex flex-col'>
          <> 
            {user?.displayName} 
          </
        </div>
        <button onClick={logoutOfApp}> Logout </button>
          </>
          )}
    </div>
  </div>
}

export default Navbar