// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_APP_ID


    apiKey: 'AIzaSyA6ib0_AcvgUGPfuMo49XE88YXuoYCt3VQ',
    authDomain: 'joyflix-89d5f.firebaseapp.com',
    projectId: 'joyflix-89d5f',
    storageBucket: 'joyflix-89d5f.appspot.com',
    messagingSenderId: '818346262927',
    appId: '1:818346262927:web:88a58d221a3ed0db7acbfa'
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);