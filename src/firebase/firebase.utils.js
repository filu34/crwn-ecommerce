import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEqsdrU6ZpvQqbUeICzFi37RihP73R4K8",
    authDomain: "crwn-db-7d6cc.firebaseapp.com",
    databaseURL: "https://crwn-db-7d6cc.firebaseio.com",
    projectId: "crwn-db-7d6cc",
    storageBucket: "crwn-db-7d6cc.appspot.com",
    messagingSenderId: "740221822080",
    appId: "1:740221822080:web:0b23f12f31e21be73c3265",
    measurementId: "G-NJM16CLLK5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;