import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "Suas credenciais aqui",
  authDomain: "Suas credenciais aqui",
  projectId: "Suas credenciais aqui",
  storageBucket: "Suas credenciais aqui",
  messagingSenderId: "Suas credenciais aqui",
  appId: "Suas credenciais aqui",
  measurementId: "Suas credenciais aqui"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db_firestore = getFirestore(app);
const auth_mod = getAuth(app);


export { auth_mod, db_firestore }