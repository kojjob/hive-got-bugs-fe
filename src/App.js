import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/problemsList.css";
import "./css/problemCard.css";
import "./css/singleProblem.css";
import "./css/suggestions.css";
import "./css/suggestionCard.css";
import "./css/button.css";
import Home from "./components/Home";
import SingleProblem from "./components/SingleProblem";
import Header from "./components/Header";
import MentorForm from "./components/MentorForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />

      <Router>
        <Home path="/" />
        <MentorForm path="/become-a-mentor" />
        <SingleProblem path="/problem" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
