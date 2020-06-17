import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADRhpS_Sl4YRa2AtFqU6sVogfSTTnSj1E",
    authDomain: "marioplan-56225.firebaseapp.com",
    databaseURL: "https://marioplan-56225.firebaseio.com",
    projectId: "marioplan-56225",
    storageBucket: "marioplan-56225.appspot.com",
    messagingSenderId: "965567589502",
    appId: "1:965567589502:web:7b44acf8a73a0b3b663c2f",
    measurementId: "G-TFN8L6DEEK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;