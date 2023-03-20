import { auth } from '../config/firebase'
import {} from 'firebase/'

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