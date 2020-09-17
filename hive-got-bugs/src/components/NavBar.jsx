import React from "react";
import ToggleViewer from "./ToggleViewer";
import { StyledLink } from "../styled/lib";
import Search from "./Search";
import "../css/navbar.css";
function NavBar() {
  return (
    <div>
      <ToggleViewer label="Menu" className="navbar">
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
      </ToggleViewer>
    </div>
  );
}

export default NavBar;
