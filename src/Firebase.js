import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAsK-LwZPx0cwS6u62LVPLaYSo6H0f8hpo",
  authDomain: "rootally-ai-b74e3.firebaseapp.com",
  projectId: "rootally-ai-b74e3",
  storageBucket: "rootally-ai-b74e3.appspot.com",
  messagingSenderId: "638142560333",
  appId: "1:638142560333:web:c0d6a2867cee72af930404",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
