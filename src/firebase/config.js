import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ2oAAK-WPDYvGHhilGwu5-qZj_PlM6ec",
  authDomain: "reactportequenos.firebaseapp.com",
  projectId: "reactportequenos",
  storageBucket: "reactportequenos.appspot.com",
  messagingSenderId: "126882447556",
  appId: "1:126882447556:web:b4b7e50159ce463cb8c991"
};

//Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}
