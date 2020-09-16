import React from "react";
import ToggleViewer from "./ToggleViewer";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <div className="navbar">
      <ToggleViewer label={"Menu"}>
        <Link to="/homepage">
          <button>Home</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="/become-a-mentor">
          <button>Become a mentor</button>
        </Link>
        <Link to="/mentors">
          <button>Mentors</button>
        </Link>
      </ToggleViewer>
      <ToggleViewer label="Search" default="false">
        <form>
          <input type="text" />
          <button type="submit">Find</button>
        </form>
      </ToggleViewer>
    </div>
  );
}

export default NavBar;
