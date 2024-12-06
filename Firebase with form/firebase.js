import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signOut ,
  sendEmailVerification,signInWithPopup,GoogleAuthProvider, signInWithPhoneNumber,} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDZyqUTelHzTbCuT0mfsakP8iUyUnn2PEk",
    authDomain: "firebse-with-orm.firebaseapp.com",
    projectId: "firebse-with-orm",
    storageBucket: "firebse-with-orm.firebasestorage.app",
    messagingSenderId: "1026196246879",
    appId: "1:1026196246879:web:602d47015947682ace26ea",
    measurementId: "G-LT0XB6M4NL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();

  export {getAuth,auth,createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword,signOut,
    sendEmailVerification,signInWithPopup,GoogleAuthProvider,signInWithPhoneNumber }
