import firebase from 'firebase';


const firebaseconfig = {
  apiKey: "AIzaSyC0NJEXWRMfx9g_UlPmLQTdfIMdHfukJFE",
  authDomain: "englishapp-50553.firebaseapp.com",
  projectId: "englishapp-50553",
  storageBucket: "englishapp-50553.appspot.com",
  messagingSenderId: "1047386133208",
  appId: "1:1047386133208:web:127e732a4be4f1e3ac3dad"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
  }

export const db = firebase.firestore();
export const auth= firebase.auth();

export default firebase;


