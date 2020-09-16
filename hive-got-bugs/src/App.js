import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import "./css/problemsList.css";
import "./css/problemCard.css";
import "./css/singleProblem.css";
import "./css/suggestions.css";
import "./css/suggestionCard.css"

import Home from "./components/Home";
import SingleProblem from "./components/SingleProblem";

import "./App.css";
import { Router } from "@reach/router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Header from "./components/Header";
import BugChart from "./components/BugChart";

function App() {
  return (
    <div className="app">
      <Router>
        <Home path="/"/>
        <SingleProblem path="/problem" />
      <Header />

      <BugChart />
      <Router>
        {/* <Home path="/homepage" />
        <Dashboard path="/dashboard"/> */}
      </Router>
    </div>
  );
}

export default App;
