import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4OFYSel0WZ4uINZlFHAAKkWL7xFxL0fM",
    authDomain: "fir-lesson-b97dc.firebaseapp.com",
    projectId: "fir-lesson-b97dc",
    storageBucket: "fir-lesson-b97dc.appspot.com",
    messagingSenderId: "130615165064",
    appId: "1:130615165064:web:b4e879593f22e03ce9df3d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
