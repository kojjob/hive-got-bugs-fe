import React from "react";

import ProblemCard from "./ProblemCard";

class Problems extends React.Component {
  state = {};

  render() {
    return (
      <div className="problemsContainer">
        <h4>Solve A Problem</h4>

        <div className="dropDown">
          <h4 className="dropBtn">Sort By:</h4>
          <div className="dropdownContent">
            <a className="sortBy">Highest Difficulty</a>
            <a className="sortBy">Most Recent</a>
            <a className="sortBy">Oldest</a>
          </div>
        </div>

        <div className="dropDown">
          <h4 className="dropBtn">Filter By:</h4>
          <div className="dropdownContent">
            <a className="sortBy">Coding Language</a>
            <a className="sortBy">Coding Language</a>
            <a className="sortBy">Coding Language</a>
          </div>
        </div>

        <div className="problemCardContainer">
          <ProblemCard />
          <br />
          <ProblemCard />
          <br />
          <ProblemCard />
        </div>
      </div>
    );
  }
}

export default Problems;
