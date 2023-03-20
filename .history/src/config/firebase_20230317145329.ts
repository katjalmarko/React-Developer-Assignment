import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCF6DsFFC2B5EmsqB2zXSOvPCWav5g15LM",
  authDomain: "todo-assignment-13c96.firebaseapp.com",
  projectId: "todo-assignment-13c96",
  storageBucket: "todo-assignment-13c96.appspot.com",
  messagingSenderId: "88468300694",
  appId: "1:88468300694:web:3a7fa1650aa774b50af3b7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();