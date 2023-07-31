import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqykLYlN3UKGp4_NSW9GPUIrspH31_kRE",
  authDomain: "video-cloud-50e33.firebaseapp.com",
  projectId: "video-cloud-50e33",
  storageBucket: "video-cloud-50e33.appspot.com",
  messagingSenderId: "1017696941693",
  appId: "1:1017696941693:web:6df44dcac8671f63e6e314",
  measurementId: "G-0DE08TN2XL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelper(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}
