import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHMcDZ0RX1K7NK050EWbpsYu0radg7vzc",
  authDomain: "easyride-99f81.firebaseapp.com",
  projectId: "easyride-99f81",
  storageBucket: "easyride-99f81.firebasestorage.app",
  messagingSenderId: "184149833775",
  appId: "1:184149833775:web:e30ce71c1ad537bfefaeda",
  measurementId: "G-KEVEFBFJKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };