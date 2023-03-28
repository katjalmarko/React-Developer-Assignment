import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {

  const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleProvider)
    }
  

  const logout = async () => {
      await signOut(auth) 
    }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}

export default Auth