
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAs07zi5TZVdEk13sWrExIAB8M3z-RcgQU",
    authDomain: "blood-bank-d4bbb.firebaseapp.com",
    databaseURL: "https://blood-bank-d4bbb.firebaseio.com",
    projectId: "blood-bank-d4bbb",
    storageBucket: "blood-bank-d4bbb.appspot.com",
    messagingSenderId: "238002584387"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
  });
export default db;
