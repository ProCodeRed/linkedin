import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlrCfwdXXDTFHlQUldL9LJ1CxLNVGY8wg",
    authDomain: "linkedin-e4c07.firebaseapp.com",
    projectId: "linkedin-e4c07",
    storageBucket: "linkedin-e4c07.appspot.com",
    messagingSenderId: "676568347727",
    appId: "1:676568347727:web:10aecafc35205ad3c8e63a",
    measurementId: "G-H9JZ92XZKC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };