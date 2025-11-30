// Import the functions you need from the SDKs you need
//import {config} from "dotenv";
//config();
import {configDotenv} from'dotenv';
configDotenv();

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "api-prueba-node-58429",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "893894113397",
    appId: process.env.FIREBASE_APP_ID
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Firestore
const db = getFirestore(app);

export { db };