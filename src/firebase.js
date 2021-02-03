import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNylf3C0XMq3iDN9LBKlj5UVSxtIdv-7U",
    authDomain: "drive-5022c.firebaseapp.com",
    databaseURL: "https://drive-5022c-default-rtdb.firebaseio.com",
    projectId: "drive-5022c",
    storageBucket: "drive-5022c.appspot.com",
    messagingSenderId: "614103089415",
    appId: "1:614103089415:web:f90f97251f588a550785a2",
    measurementId: "G-6CRWZB2NPV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;