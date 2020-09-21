import React from "react";
import { Router } from "@reach/router";
// import "./App.css";
// import "./css/problemsList.css";
// import "./css/problemCard.css";
// import "./css/singleProblem.css";
// import "./css/suggestions.css";
// import "./css/suggestionCard.css";
// import "./css/button.css";
import { StyledHome } from "./styled/home";
import SingleProblem from "./components/SingleProblem";
import Header from "./components/header/Header";
import MentorForm from "./components/MentorForm";
import Dashboard from "./components/dashboard/Dashboard";
import MentorList from "./components/mentors/MentorList";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <StyledHome path="/" />
        <MentorList path="/mentors" />
        <MentorForm path="/become-a-mentor" />
        <SingleProblem path="/problem" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
