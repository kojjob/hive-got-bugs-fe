import React from "react"
import { Link } from "@reach/router";

import logo from "../img/bug-logo.svg"

function Icon() {
  return (
    <div className="iconContainer">
      <Link to="/">
        <img src={logo} alt="Bug Icon" />
      </Link>
    </div>
  );
}

export default Icon