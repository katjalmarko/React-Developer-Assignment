import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { ExitToApp } from '@mui/icons-material';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


const Navbar = () => {

  const [user] = useAuthState(auth);
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return <div className='flex flex-col sm:flex-row w-full h-20 items-center justify-between bg-gray-700/20'>

  <div className='flex ml-10 gap-5 text-white'>
   <Link to="/" 
         className='text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2'> 
           Tasks 
           <AssignmentOutlinedIcon className= "ml-2"/>
   </Link>
   <Link to="/contact" 
         className='text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2'> 
           Contact 
           <ConnectWithoutContactRoundedIcon className= "ml-2"/>
   </Link>
  </div>

  <h1 className='font-bold text-3xl sm:text-5xl tracking-widest animate-pulse text-white my-4 sm:my-0'>
   Welcome to Task Manager
  </h1>

   <div className='flex items-center gap-6 sm:gap-12 mr-6 sm:mr-14'>
     {user && (
       <>
       <div className='flex flex-col items-center text-white'>
         <img className='w-8 h-8 sm:w-10 sm:h-10 rounded-full'
             src={user?.photoURL || ""}/>
         <p className='text-xs mt-1'> 
           {user?.displayName} 
         </p>
       </div>
       <button 
         onClick={logoutOfApp}
         className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
         > 
         <ExitToApp className= "mr-2"/>
         Logout 
       </button>
         </>
         )}
   </div>
 </div>
}

export default Navbar