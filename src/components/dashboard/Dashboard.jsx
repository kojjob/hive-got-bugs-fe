import React, { Component } from "react";
import BugChart from "./BugChart";
// import "../dashboard.css";

class Dashboard extends Component {
  state = { isLoading: true, user: this.props.user };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, user } = this.state;
    if (isLoading) return <p>Dashboard loading...</p>;
    return (
      <div>
        <header>
          <h2>Dashboard</h2>
          <h4>{user}</h4>
          <h4>Member since 00/00</h4>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="Users avatar"
          />
        </header>
        <BugChart />
      </div>
    );
  }
}

export default Dashboard;
