import React from "react";
import Problems from "./Problems";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div className="problemsList">
        <Problems />
      </div>
    );
  }
}

export default Home;
