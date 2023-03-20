import { auth } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Auth = () => {

  const SignIn = () => {

  }

  return (
    <div>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Password' />
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Auth