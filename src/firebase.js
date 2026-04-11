// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVjxmqTxc662F4lKAFfgxTGn1knsuFEVw",
    authDomain: "sahityasanskriti.firebaseapp.com",
    projectId: "sahityasanskriti",
    storageBucket: "sahityasanskriti.firebasestorage.app",
    messagingSenderId: "128740272144",
    appId: "1:128740272144:web:b8179790c5fc2e59838295",
    measurementId: "G-Q3BFGSV82K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
