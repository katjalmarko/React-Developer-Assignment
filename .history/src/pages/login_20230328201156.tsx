import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'

const Login = () => {

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
    }

  return <div className="Login">
            <button onClick={signInWithGoogle}>Sign In with Google to Continue...</button>
        </div>
}

export default Login