// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVHXJRBE7dgy6ruSoBnoeRH4NPuVS7AwA",
  authDomain: "red-onions-food.firebaseapp.com",
  projectId: "red-onions-food",
  storageBucket: "red-onions-food.appspot.com",
  messagingSenderId: "229647303250",
  appId: "1:229647303250:web:3b262bc13e0814c91c558b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
