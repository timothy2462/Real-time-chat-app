import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX3NV0a4c5DRZZTf04QNxeOyVRO5K7rkU",
  authDomain: "timostickz-firebase-chatapp.firebaseapp.com",
  projectId: "timostickz-firebase-chatapp",
  storageBucket: "timostickz-firebase-chatapp.appspot.com",
  messagingSenderId: "1076988567632",
  appId: "1:1076988567632:web:b5d2d4fcbe7a9c3dc8b155",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
