import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAslgbPagA7MHiXc3YhRwAFSIoXJLfo_qk",
    authDomain: "movieapp-633f9.firebaseapp.com",
    databaseURL: "https://movieapp-633f9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movieapp-633f9",
    storageBucket: "movieapp-633f9.appspot.com",
    messagingSenderId: "409905823294",
    appId: "1:409905823294:web:c0c0b79ece97d749211b6f",
    measurementId: "G-TZZBPQVZ0K"
}

firebase.initializeApp(firebaseConfig)

export { firebase }