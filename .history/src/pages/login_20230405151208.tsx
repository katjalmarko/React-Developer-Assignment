import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    await signinWith(auth, googleProvider)}


  return <div className='flex h-screen w-screen justify-center items-center font-black text-4xl tracking-widest animate-pulse'>
            <button onClick={signInWithGoogle}>Click Here to Continue...</button>
        </div>
}

export default Login