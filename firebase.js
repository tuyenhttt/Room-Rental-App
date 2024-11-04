import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQGWPWIcqG5ThiYcDfzfGZ6U8sdpZlWWE",
  authDomain: "example-3c639.firebaseapp.com",
  projectId: "example-3c639",
  storageBucket: "example-3c639.firebasestorage.app",
  messagingSenderId: "341572825421",
  appId: "1:341572825421:web:9a89ebdc5751ff02cc4704",
  measurementId: "G-63X6KNB5YK",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
export const database = getFirestore(app);
