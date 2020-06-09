import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
