import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsAeKvsaJl0PNp-4t2h5ulB5yZ02xrjHA",
    authDomain: "whatsapp-a3df2.firebaseapp.com",
    databaseURL: "https://whatsapp-a3df2.firebaseio.com",
    projectId: "whatsapp-a3df2",
    storageBucket: "whatsapp-a3df2.appspot.com",
    messagingSenderId: "798017550082",
    appId: "1:798017550082:web:b6b0099308b6c43169341b",
    measurementId: "G-773KCJHMRR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
