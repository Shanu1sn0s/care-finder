import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZz0731jZat34EJqhVYgc407gerVAdb1I',
  authDomain: 'react-capstone-e1fe0.firebaseapp.com',
  projectId: 'react-capstone-e1fe0',
  storageBucket: 'react-capstone-e1fe0.appspot.com',
  messagingSenderId: '254443294829',
  appId: '1:254443294829:web:e383be92c33a58dc15af64',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export { db };
