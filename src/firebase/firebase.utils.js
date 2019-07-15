import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzTbe_arXIY1Q4igTH50TbUkc9jbk1dWg",
    authDomain: "e-shop-fd22b.firebaseapp.com",
    databaseURL: "https://e-shop-fd22b.firebaseio.com",
    projectId: "e-shop-fd22b",
    storageBucket: "",
    messagingSenderId: "966063246028",
    appId: "1:966063246028:web:e55371769050def7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;