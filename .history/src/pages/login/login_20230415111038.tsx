import { auth, googleProvider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)}


  return <div className="flex h-screen w-screen justify-center items-center font-bold text-white text-5xl animate-pulse bg-gradient-to-r from-black to-green-600">
  <button class="px-8 py-4 rounded-lg shadow-lg bg-white text-black hover:bg-gray-300 transition-colors duration-300" onClick={signInWithGoogle}>
      Click Here to Continue...
  </button>
</div>
}

export default Login