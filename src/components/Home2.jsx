import React from "react";

// import Title from "./Title";
import Problems from "./Problems";
// import Icon from "./Icon";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div className="problemsList">
        <Problems />
      </div>
    );

    // return <div className="homeContainer"></div>;
  }
}

export default Home;
