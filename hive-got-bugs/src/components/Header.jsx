import React from "react";
import Title from "./Title";
import Icon from "./Icon";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="homeContainer">
      <Icon />
      <NavBar />
      <div className="header">
        <Title />
      </div>
    </div>
  );
};

export default Header;
