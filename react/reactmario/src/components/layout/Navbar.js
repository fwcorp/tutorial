import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container"></div>
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </nav>
    </div>
  );
}

export default Navbar;
