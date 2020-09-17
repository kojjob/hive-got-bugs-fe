import React from "react";

import { StyledMainNav } from "../styled/lib";
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
      <StyledMainNav />
    </div>
  );
};

export default Header;
