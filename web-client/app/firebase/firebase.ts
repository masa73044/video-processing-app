// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
