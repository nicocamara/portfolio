import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCnR-f3lQwnpEEDP4rtEWpDpsgYH7ReNzA',
  authDomain: 'porfolio-89529.firebaseapp.com',
  databaseURL: 'https://porfolio-89529-default-rtdb.firebaseio.com',
  projectId: 'porfolio-89529',
  storageBucket: 'porfolio-89529.appspot.com',
  messagingSenderId: '430424625913',
  appId: '1:430424625913:web:16207f3d1bf4e034494828',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
