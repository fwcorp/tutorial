import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var Config = {
  apiKey: "AIzaSyCN6e-a-WNedWfzaEeY9GEQxN2dS7AbRGo",
  authDomain: "mario-edb06.firebaseapp.com",
  databaseURL: "https://mario-edb06.firebaseio.com",
  projectId: "mario-edb06",
  storageBucket: "mario-edb06.appspot.com",
  messagingSenderId: "454386232682",
  appId: "1:454386232682:web:9c776df3d3eb2d93aac913",
  measurementId: "G-KBFDBMKL3J",
};

firebase.initializeApp(Config);

export default firebase;
