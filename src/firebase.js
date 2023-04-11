// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCoYUYDLtOn0svGI_w5i_kvy6nXkb9xcA",
  authDomain: "netflix-ui-app-de71c.firebaseapp.com",
  projectId: "netflix-ui-app-de71c",
  storageBucket: "netflix-ui-app-de71c.appspot.com",
  messagingSenderId: "304147967771",
  appId: "1:304147967771:web:13e971c932222a171f6dbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
