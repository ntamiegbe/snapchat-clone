import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCebs0ya4OSe2M1qiqVkBzbfEd5dFNy-H4",
    authDomain: "snapchat-clone-6fb9e.firebaseapp.com",
    projectId: "snapchat-clone-6fb9e",
    storageBucket: "snapchat-clone-6fb9e.appspot.com",
    messagingSenderId: "1058186819118",
    appId: "1:1058186819118:web:4cf8694658eed969b2d1bf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }