import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import firebase from "./firebase";

function App() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("mood").get();
      console.log(data);
      // const spells = data.map((doc) => doc.data());
    };
    fetchData();
  }, []);

  return <h1>Firebase CRUD</h1>;
}

export default App;
