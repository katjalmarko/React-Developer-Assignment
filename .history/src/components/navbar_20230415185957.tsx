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
         className='flex items-center justify-center w-28 h-10 
         bg-red-100/10 rounded-3xl 
         hover:bg-red-200/20 
         active:bg-red-300/30'> 
           Tasks 
           <AssignmentOutlinedIcon className= "ml-2"/>
   </Link>
   <Link to="/contact" 
         className='flex items-center justify-center w-28 h-10 
         bg-red-100/10 rounded-3xl 
         hover:bg-red-200/20 
         active:bg-red-300/30'> 
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
         className='"inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
         bg-red-100/10 rounded-3xl 
         hover:bg-red-200/20 
         active:bg-red-300/30'
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