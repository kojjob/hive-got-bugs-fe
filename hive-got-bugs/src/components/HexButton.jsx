import React from "react";
import "../css/button.css";

const HexButton = ({ className, label, onclick }) => {
  return (
    <div className="hexbutton">
      <button className={className} onClick={onclick}>
        <p>{label}</p>
      </button>
    </div>
  );
};

export default HexButton;
