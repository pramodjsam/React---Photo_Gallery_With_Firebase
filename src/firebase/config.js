import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDD5nOydPN9X3k573-sZaiYidyecXz_AoA",
  authDomain: "ninja-firegram-99fb5.firebaseapp.com",
  databaseURL: "https://ninja-firegram-99fb5.firebaseio.com",
  projectId: "ninja-firegram-99fb5",
  storageBucket: "ninja-firegram-99fb5.appspot.com",
  messagingSenderId: "738703843870",
  appId: "1:738703843870:web:b2526c932f9a24fc8a840f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };