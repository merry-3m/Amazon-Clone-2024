
import firebase from "firebase/compat/app";
// ` for authentication
import { getAuth } from "firebase/auth"
// ` for database

import "firebase/compat/firestore"
import "firebase/compat/auth"

//` Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGujJI084pLJelxuZpBXZhWls2d3R8Z8",
  authDomain: "clone-a307c.firebaseapp.com",
  projectId: "clone-a307c",
  storageBucket: "clone-a307c.appspot.com",
  messagingSenderId: "194935094990",
  appId: "1:194935094990:web:d2beba7ec4a635fa641a9f"
};

//` Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// ` export authentication, db

export const auth = getAuth(app)
export const db = app.firestore()
