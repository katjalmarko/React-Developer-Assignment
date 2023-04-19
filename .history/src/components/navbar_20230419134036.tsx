import { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { ExitToApp } from '@mui/icons-material';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


const Navbar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(auth);
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="flex flex-col sm:flex-row w-full h-auto items-center bg-gray-700/20 pb-4 sm:pb-0 lg:h-20 lg:justify-center">
      <div className="flex justify-center w-full sm:w-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none sm:hidden mr-5"
        >
          <svg
            className={`w-6 h-6 transition-transform ${
              menuOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-widest animate-pulse text-white my-4 sm:my-0">
          Welcome to Task Manager
        </h1>
      </div>
  
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-wrap justify-center gap-2 sm:flex sm:flex-row sm:items-center sm:ml-10 sm:gap-5 text-white`}
      >
        <Link
          to="/"
          className="flex items-center justify-center lg:gap-2 sm:justify-start text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-2 py-2 text-center mt-2 mr-2 mb-2 sm:mt-0 sm:mb-0"
        >
          <span className="hidden sm:inline">Tasks</span>
          <AssignmentOutlinedIcon className="flex items-ceml-2 sm:ml-0" />
        </Link>
  
        <Link
          to="/code"
          className="flex items-center justify-center lg:gap-2 sm:justify-start text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 sm:mt-0 sm:mb-0"
        >
          <span className="hidden sm:inline">Code</span>
          <IntegrationInstructionsOutlinedIcon className="ml-2 sm:ml-0" />
        </Link>
  
        <Link
          to="/contact"
          className="flex items-center justify-center lg:gap-2 text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 sm:mt-0 sm:mb-0"
        >
          <span className="hidden sm:inline">Contact</span>
          <ConnectWithoutContactRoundedIcon className="ml-2 sm:ml-0" />
        </Link>
        {user && (
        <>
          <div className="flex flex-col items-center text-white">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL || ""}
            />
            <p className="hidden sm:block text-xs mt-1">{user?.displayName}</p>
          </div>
          <button
            onClick={logoutOfApp}
            className="flex items-center justify-center lg:gap-2 sm:justify-start text-white bg-gradient-to-r rounded-2xl from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm px-5 py-2.5 text-center mt-2 mr-2 mb-2 sm:mt-0 sm:mb-0"
          >
            <ExitToApp className="mr-2 sm:mr-0" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </>
      )}
    </div>
  </div>
);
}

export default Navbar