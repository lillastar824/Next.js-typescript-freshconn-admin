import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

if (typeof window !== 'undefined' && !firebase.apps.length) {
    const CLIENT_CONFIG = {
        apiKey: "AIzaSyD45YPEUZ7j5QPVzhW5ivsCCUEKFuZC5e0",
        authDomain: "freshconn-develop.firebaseapp.com",
        databaseURL: "https://freshconn-develop.firebaseio.com",
        projectId: "freshconn-develop",
        storageBucket: "freshconn-develop.appspot.com",
        messagingSenderId: "489149559976",
        appId: "1:489149559976:web:b5d727d7ec9e08a2edbe9d",
        measurementId: "G-KF1NGQ4CJV"
    };

    firebase.initializeApp(CLIENT_CONFIG);
    firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);
    (window as any).firebase = firebase;
}

export { firebase };