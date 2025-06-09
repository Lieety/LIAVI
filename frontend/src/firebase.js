// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1qiDoLFF_pGxB2_n02-X39bR6pPN79o",
  authDomain: "liavi-35e52.firebaseapp.com",
  projectId: "liavi-35e52",
  storageBucket: "liavi-35e52.firebasestorage.app",
  messagingSenderId: "855894161166",
  appId: "1:855894161166:web:eaa1edcf1261a1e08e095f",
  measurementId: "G-4NBY03H00X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };