import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvoE7sU3zcJDPArsdtXloFtIgoAGcR_ms",
  authDomain: "challenge-2ea17.firebaseapp.com",
  projectId: "challenge-2ea17",
  storageBucket: "challenge-2ea17.appspot.com",
  messagingSenderId: "262572147975",
  appId: "1:262572147975:web:3c87babf8fd8f41ff671a2"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { db, auth };