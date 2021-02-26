import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  // Put firebase app config here
})

const db = firebaseApp.firestore()

export default db
