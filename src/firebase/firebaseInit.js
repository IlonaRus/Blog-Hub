import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB6u-O9K4V0RBoiX-M8A9XQZMNuRNjFwpk",
  authDomain: "blog-hub-f73cd.firebaseapp.com",
  projectId: "blog-hub-f73cd",
  storageBucket: "blog-hub-f73cd.appspot.com",
  messagingSenderId: "951910715763",
  appId: "1:951910715763:web:f7a7aa6477e0bc2db37506"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;