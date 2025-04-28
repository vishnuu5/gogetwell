import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTn0l9wKYkgotim5mKXoJynPOSsKCxwHU",
  authDomain: "getwell-saas.firebaseapp.com",
  projectId: "getwell-saas",
  storageBucket: "getwell-saas.firebasestorage.app",
  messagingSenderId: "111685203803",
  appId: "1:111685203803:web:939f2a46de3bd5de09cc7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
