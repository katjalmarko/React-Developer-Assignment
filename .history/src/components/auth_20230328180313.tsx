import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {

  // console.log(auth?.currentUser?.email);

  const signInWithGoogle = async () => {
   
      await signInWithPopup(auth, googleProvider)
  
  
    }
  

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default Auth