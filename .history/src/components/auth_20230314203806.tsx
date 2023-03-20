import { auth } from '../config/firebase'
import { signInWith } from 'firebase/auth'
import { useState } from "react"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = () => {

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