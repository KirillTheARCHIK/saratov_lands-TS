// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlAfr0Raw7gOyfp0YJgJauXThNABOhikw",
    authDomain: "saratov-lands.firebaseapp.com",
    projectId: "saratov-lands",
    storageBucket: "saratov-lands.appspot.com",
    messagingSenderId: "595315616013",
    appId: "1:595315616013:web:3492ed2191310b48e2e844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);