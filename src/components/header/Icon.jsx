import React from "react";
import { Link } from "@reach/router";

import logo from "../../img/bug-logo.svg";

function Icon() {
  return (
    <Link to="/">
      <img src={logo} alt="Bug Icon" />
    </Link>
  );
}

export default Icon;
