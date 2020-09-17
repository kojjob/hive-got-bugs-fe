import React from "react";

import NavBar from "./NavBar";
import Icon from "./Icon";
import Title from "./Title";
const Header = () => {
  return (
    <div className="homeContainer">
      <div className="iconNav">
        <Icon />
      </div>
      <div className="header">
        <Title />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
