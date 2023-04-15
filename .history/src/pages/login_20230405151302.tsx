import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup, signInWithRedirect } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)}


  return <div className='flex h-screen w-screen justify-center items-center font-black text-4xl tracking-widest animate-pulse'>
            <button onClick={signInWithGoogle}>Click Here to Continue...</button>
        </div>
}

export default Login