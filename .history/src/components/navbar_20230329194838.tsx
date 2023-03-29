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

  return <div> 

   <div>
    <Link to="/"> Home </Link>
    {!user ? (
    <Link to="/login"> Login </Link>
    ) : (
    <Link to="/contact"> Contact </Link>
    )}
   </div>

    <div className='User'>
      {user && (
        <>
      <p> {user?.displayName} </p>
      <img 
        src={user?.photoURL || ""}
        width="30" 
        height="30"
        />
        <button onClick={signUserOut}> Logout </button>
        </>
        )}
    </div>
  </div>
}

export default Navbar