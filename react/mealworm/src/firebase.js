import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjc0UcDqWSelaA7crj3WsUtOHVjAPMVV0",
  authDomain: "mealworm-two-33366.firebaseapp.com",
  projectId: "mealworm-two-33366",
  storageBucket: "mealworm-two-33366.appspot.com",
  messagingSenderId: "721740218028",
  appId: "1:721740218028:web:0c0365fc2b333e05b4a909"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();