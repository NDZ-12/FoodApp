// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAQKqft9kK2vPfPEb44n_5i4Sb0YJHWTk",
  authDomain: "swiggy-clone-16b4b.firebaseapp.com",
  projectId: "swiggy-clone-16b4b",
  storageBucket: "swiggy-clone-16b4b.appspot.com",
  messagingSenderId: "666093660129",
  appId: "1:666093660129:web:71ab449a72d86f0276d4a0",
  measurementId: "G-1KCQNDMVZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
