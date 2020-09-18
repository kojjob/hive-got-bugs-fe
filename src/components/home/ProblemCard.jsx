import React from "react";
import { Link } from "@reach/router";

function ProblemCard({ problem, className }) {
  return (
    <Link to="/problem">
      <div className="hexagon">
        <p id="headerOne">Posted By | Posted When</p>
        <p id="headerTwo">Difficulty Rating | Language</p>
        <p id="title">Title</p>
        <p id="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tempora
          fugit voluptate...
        </p>
      </div>
    </Link>
  );
}

export default ProblemCard;
