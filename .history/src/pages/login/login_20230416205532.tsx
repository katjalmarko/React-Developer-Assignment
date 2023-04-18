import { auth, googleProvider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)}


  return <div className='flex h-screen w-screen justify-center items-center font-black text-5xl text-white animate-'>
            <button onClick={signInWithGoogle}>Click to Continue...</button>
        </div>
}

export default Login