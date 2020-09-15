import React from "react"

import Title from "./Title"
import Problems from "./Problems"
import Icon from "./Icon"

class Home extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="homeContainer">
        <div className="iconNav">
          <Icon />
        </div>
        <div className="header">
          <Title />
        </div>
        <div className="problemsList">
          <Problems />
        </div>
      </div>
    );
  }
}

export default Home