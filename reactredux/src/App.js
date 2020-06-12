import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Cookies from "universal-cookie";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const cookies = new Cookies();
  cookies.set("myCat", "yumi", {
    path: "/",
    expires: new Date(2021, 12),
  });
  console.log(cookies.get("myCat"));

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3> Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
