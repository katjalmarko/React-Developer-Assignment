import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth'


export const Navbar = () => {

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth)
  }

  return <div> 

   <div>
    <Link to="/"> Home </Link>
    {!user ? (
    <Link to="/login"> Login </Link>
    ) : (
    <Link to="/contact"> Create Task </Link>
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