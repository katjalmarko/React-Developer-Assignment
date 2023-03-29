import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)}


  return <div className='flex h-screen w-screen justify-center items-center font-bold text-2xl tracking-widest animate-pulse'>
            <button onClick={signInWithGoogle}>Click HERE to Continue...</button>
        </div>
}

export default Login