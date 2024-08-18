import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWGUw2q0tTjel90yOslwP6-wVj99tHpDE",
  authDomain: "fir-cab56.firebaseapp.com",
  projectId: "fir-cab56",
  storageBucket: "fir-cab56.appspot.com",
  messagingSenderId: "329589273042",
  appId: "1:329589273042:web:9ec3be257b31d095ff980b",
  databaseURL: "https://fir-cab56-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);