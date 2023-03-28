import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {

  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
    navigate('/') 
    }

  return <div className="Login">
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
}

export default Login