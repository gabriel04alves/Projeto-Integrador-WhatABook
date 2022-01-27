import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDQsxyd4NLqZWa-v8zkFOeOY7jGF6c5Jpk",
    authDomain: "whatabook-621fe.firebaseapp.com",
    projectId: "whatabook-621fe",
    storageBucket: "whatabook-621fe.appspot.com",
    messagingSenderId: "508882402123",
    appId: "1:508882402123:web:2994447dff45e8dc2686ce"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const profileCollection = db.collection('profile')

export {
    db,
    auth,
    profileCollection,
    googleProvider
}