import React from "react"

import Title from "./Title"
import Icon from "./Icon"

class Home extends React.Component {
  state = {

  }

  render() {
    return(
      <div className="homeContainer">
      <Icon />
        <div className="header">
          <Title />
        </div>
      </div>
    )
  }
}

export default Home