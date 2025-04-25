import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvIGOFUuqnd06hoj4e668uYS0j9y3jIYw",
  authDomain: "clone-4fdad.firebaseapp.com",
  projectId: "clone-4fdad",
  storageBucket: "clone-4fdad.appspot.com", // 🔁 small typo fixed: should be `.appspot.com`
  messagingSenderId: "623619822839",
  appId: "1:623619822839:web:5a8c5bc942400e538e6ff2",
  measurementId: "G-8VKK5EGPPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
