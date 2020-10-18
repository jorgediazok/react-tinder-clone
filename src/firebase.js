import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDqoEO3jqPhS_eVpoLJai7U2Misout2J6Q",
  authDomain: "tinder-clone-react-327a5.firebaseapp.com",
  databaseURL: "https://tinder-clone-react-327a5.firebaseio.com",
  projectId: "tinder-clone-react-327a5",
  storageBucket: "tinder-clone-react-327a5.appspot.com",
  messagingSenderId: "815698928757",
  appId: "1:815698928757:web:af6b179f07c1f117bac43c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database;