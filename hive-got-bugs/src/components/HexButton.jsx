import React from "react";

const HexButton = ({ className, label, onclick }) => {
  return (
    <button className={className} onClick={onclick}>
      <p>{label}</p>
    </button>
  );
};

export default HexButton;
