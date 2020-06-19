import React from "react";
import Log from "./components/Log";
import Stat from "./components/Stat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const Main = () => <h1>Main!</h1>;
const Elsewhere = () => <h1>Elsewhere!</h1>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/else">Else</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/else/" exact component={Elsewhere} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
