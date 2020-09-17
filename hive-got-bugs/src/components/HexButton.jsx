import React from "react";
import "../css/button.css";

const HexButton = ({ className, label }) => {
  return (
    <button className={className}>
      <p>{label}</p>
    </button>
  );
};

export default HexButton;
