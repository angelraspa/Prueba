import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyDYkK-pbONO8oxtVdezBzRCxz1a5XwkVm8",
  authDomain: "prueba1-6bde5.firebaseapp.com",
  projectId: "prueba1-6bde5",
  storageBucket: "prueba1-6bde5.appspot.com",
  messagingSenderId: "465257417742",
  appId: "1:465257417742:web:564fcaa05f4b010ede005f"
}


initializeApp(firebaseConfig) 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
