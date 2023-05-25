

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDuIJQ7Io_yMAs0Z-rwBfSTH3gHiMhn1v0",
  authDomain: "blog-d11c1.firebaseapp.com",
  projectId: "blog-d11c1",
  storageBucket: "blog-d11c1.appspot.com",
  messagingSenderId: "921850255759",
  appId: "1:921850255759:web:55be9be0cbb8803bbdd3fa",
  measurementId: "G-R8BLBH1D1V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

