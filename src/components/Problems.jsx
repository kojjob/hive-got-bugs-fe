import React from "react";

import ProblemCard from "./home/ProblemCard";

class Problems extends React.Component {
  state = {};

  render() {
    return (
      <div className="problemsContainer">
        <h4>Solve A Problem</h4>

        <div className="dropDown">
          <h4 className="dropBtn">Sort By:</h4>
          <div className="dropdownContent">
            <a className="sortBy" href="www.example.com">
              Highest Difficulty
            </a>
            <a className="sortBy" href="www.example.com">
              Most Recent
            </a>
            <a className="sortBy" href="www.example.com">
              Oldest
            </a>
          </div>
        </div>

        <div className="dropDown">
          <h4 className="dropBtn">Filter By:</h4>
          <div className="dropdownContent">
            <a className="sortBy" href="www.example.com">
              Coding Language
            </a>
            <a className="sortBy" href="www.example.com">
              Coding Language
            </a>
            <a className="sortBy" href="www.example.com">
              Coding Language
            </a>
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
