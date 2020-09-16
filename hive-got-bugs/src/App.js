import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Header from "./components/Header";
import GitHubLogin from "./components/GitHubLogin";

function App() {
  return (
    <div className="app">
      <Header />
      <GitHubLogin />
      <Router>
        {/* <Home path="/homepage" />
        <Dashboard path="/dashboard"/> */}
      </Router>
    </div>
  );
}

export default App;
