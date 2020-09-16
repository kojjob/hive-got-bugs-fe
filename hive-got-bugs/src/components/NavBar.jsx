import React from "react";
import ToggleViewer from "./ToggleViewer";
import { StyledLink } from "../styled/lib";
import Search from "./Search";

function NavBar() {
  return (
    <div className="navbar">
      <ToggleViewer label={"Menu"}>

        <StyledLink as="button" to="/homepage">
          Home
        </StyledLink>
        <StyledLink as="button" to="/dashboard">
          Dashboard
        </StyledLink>
        <StyledLink as="button" to="/become-a-mentor">
          Become a mentor
        </StyledLink>
        <StyledLink as="button" to="/mentors">
          Mentors
        </StyledLink>
      </ToggleViewer>
      <ToggleViewer label="Search" default={false}>
        <Search />
        
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

      <ToggleViewer label="Search" default={false}>

        <form>
          <input type="text" />
          <button type="submit">Find</button>
        </form>
      </ToggleViewer>
    </div>
  );
}

export default NavBar;
