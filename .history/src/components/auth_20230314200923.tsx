import { auth } from '../config/firebase'
import { sign } from 'firebase/auth'

const Auth = () => {
  return (
    <div>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Password' />
      <button>Sign In</button>
    </div>
  )
}

export default Auth