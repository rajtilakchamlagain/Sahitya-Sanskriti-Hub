import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVjxmqTxc662F4lKAFfgxTGn1knsuFEVw",
    authDomain: "sahityasanskriti.firebaseapp.com",
    projectId: "sahityasanskriti",
    storageBucket: "sahityasanskriti.firebasestorage.app",
    messagingSenderId: "128740272144",
    appId: "1:128740272144:web:b8179790c5fc2e59838295"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testFirebase() {
    console.log("Testing Firebase connection...");
    try {
        const testDocRef = doc(db, "poems", "1");
        console.log("Attempting to read...");
        const snapshot = await getDoc(testDocRef);
        console.log("Read successful! Data:", snapshot.data());
        console.log("Attempting to write...");
        await setDoc(testDocRef, { test: true }, { merge: true });
        console.log("Write successful!");
    } catch (e) {
        console.error("Firebase Test Failed:", e);
    }
    process.exit(0);
}

testFirebase();
