import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  console.log

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Auth