import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCebs0ya4OSe2M1qiqVkBzbfEd5dFNy-H4",
    authDomain: "snapchat-clone-6fb9e.firebaseapp.com",
    projectId: "snapchat-clone-6fb9e",
    storageBucket: "snapchat-clone-6fb9e.appspot.com",
    messagingSenderId: "1058186819118",
    appId: "1:1058186819118:web:4cf8694658eed969b2d1bf"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)
const storage = getStorage(firebaseApp)
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider }