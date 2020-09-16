import React, { Component } from "react";

class ToggleViewer extends Component {
  state = {
    isVisible: this.props.default,
  };

  toggleViewer = () => {
    this.setState(({ isVisible }) => {
      return { isVisible: !isVisible };
    });
  };

  render() {
    const { label } = this.props;
    const { isVisible } = this.state;
    return (
      <div>
        <button onClick={this.toggleViewer}>{label}</button>
        {isVisible && this.props.children}
      </div>
    );
  }
}

export default ToggleViewer;
