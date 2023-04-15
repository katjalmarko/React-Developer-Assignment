import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { env } from 'process';


const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: "todo-assignment-13c96.firebaseapp.com",
  projectId: "todo-assignment-13c96",
  storageBucket: "todo-assignment-13c96.appspot.com",
  messagingSenderId: "88468300694",
  appId: "1:88468300694:web:3a7fa1650aa774b50af3b7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)