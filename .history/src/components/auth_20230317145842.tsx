import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'
import { useState } from "react"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await GoogleAuthProvider()
  }

  return (
    <div>
      <input type="text" placeholder='Name' onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signIn}>Sign In</button>
      <button>Sign In With Google</button>
    </div>
  )
}

export default Auth