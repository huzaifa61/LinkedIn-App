import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeFl7QlVvaxDJc9EwREeeTqToKje7NvLY",
  authDomain: "linkedin-3f10b.firebaseapp.com",
  projectId: "linkedin-3f10b",
  storageBucket: "linkedin-3f10b.appspot.com",
  messagingSenderId: "445041662460",
  appId: "1:445041662460:web:0c548df7f2c6318cc1ba79",
  measurementId: "G-5RH0D74152"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};