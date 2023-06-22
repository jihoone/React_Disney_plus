// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hHppsQIY-FAYX5PFOgw7cYoCyw_muyU",
  authDomain: "react-disney-plus-app-36b22.firebaseapp.com",
  projectId: "react-disney-plus-app-36b22",
  storageBucket: "react-disney-plus-app-36b22.appspot.com",
  messagingSenderId: "485630729836",
  appId: "1:485630729836:web:9fc40117935c344eeb4249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
