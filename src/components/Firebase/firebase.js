import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDu3pxov3n7wBQ8gcovVmXCs9dBnstQmEI",
  authDomain: "slack-clone-152da.firebaseapp.com",
  databaseURL: "https://slack-clone-152da.firebaseio.com",
  projectId: "slack-clone-152da",
  storageBucket: "slack-clone-152da.appspot.com",
  messagingSenderId: "861627207916",
  appId: "1:861627207916:web:f9019b893de6d5f3cc55c9",
  measurementId: "G-4CEER9YVN9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
