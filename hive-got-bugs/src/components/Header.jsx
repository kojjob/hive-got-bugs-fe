import React from "react";
import Title from "./Title";
import Icon from "./Icon";

const Header = () => {
  return (
    <div className="homeContainer">
      <Icon />
      <div className="header">
        <Title />
      </div>
    </div>
  );
};

export default Header;
