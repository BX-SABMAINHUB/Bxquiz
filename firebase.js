// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Configuración de Firebase (puedes dejarla hardcodeada o usar variables de entorno)
const firebaseConfig = {
  apiKey: "AIzaSyD13N4-9MjTrmlPwGP7mves0Exje4v2ACw",
  authDomain: "kahoot-8529e.firebaseapp.com",
  databaseURL: "https://kahoot-8529e-default-rtdb.firebaseio.com",
  projectId: "kahoot-8529e",
  storageBucket: "kahoot-8529e.firebasestorage.app",
  messagingSenderId: "313414356056",
  appId: "1:313414356056:web:4aab4587f7df9393008e2d",
  measurementId: "G-8T4CPC1BQ3"
};

// Versión con variables de entorno (recomendada para Vercel)
const configFromEnv = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Usa variables de entorno si existen, si no usa la config hardcodeada
const finalConfig = Object.values(configFromEnv).some(v => !v) 
  ? firebaseConfig 
  : configFromEnv;

const app = initializeApp(finalConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);

// Analytics opcional (coméntalo si causa problemas en servidor)
import { getAnalytics } from "firebase/analytics";
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
