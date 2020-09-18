import React, { Component } from "react";

class BugPoints extends Component {
  state = {
    bugPoints: 0,
    bugPointsOverMonth: 0,
    isLoading: true,
  };

  componentDidMount() {
    //apiFunc((bugPoints) => {
    //   this.setState({bugPoints, isLoading: false})
    // })
  }

  render() {
    const { bugPoints, isLoading } = this.state;
    if (isLoading) return <p>Loading bug points!</p>;
    return (
      <div>
        <p>You have accumulated over {bugPoints} bug points! </p>
      </div>
    );
  }
}

export default BugPoints;
