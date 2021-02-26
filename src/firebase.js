import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3MgAvvW4gtv3EDEC3ss8-LlfnnnxioUg",
  authDomain: "facebook-messenger-42eb9.firebaseapp.com",
  projectId: "facebook-messenger-42eb9",
  storageBucket: "facebook-messenger-42eb9.appspot.com",
  messagingSenderId: "795691417495",
  appId: "1:795691417495:web:a2f1690d47907c670d4ed2"
})

const db = firebaseApp.firestore()

export default db
