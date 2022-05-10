 import  firebase from "firebase";

//initialize your database


const firebaseConfig = {
   apiKey: "AIzaSyBxyKtQOJ2pP3kglx3R6TFLDCvU7N5XbuQ",
  authDomain: "attendence-79e53.firebaseapp.com",
  databaseURL: "https://attendence-79e53-default-rtdb.firebaseio.com",
  projectId: "attendence-79e53",
  storageBucket: "attendence-79e53.appspot.com",
  messagingSenderId: "176944211850",
  appId: "1:176944211850:web:4e87943d3222e7dd174a73"
};
firebase.initializeApp(firebaseConfig);




  export default firebase.database()
 

  