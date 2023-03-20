import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = () => {

  }

  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' onChange={}/>
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Auth