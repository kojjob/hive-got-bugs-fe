import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard user="Jane Blogs" />

      <Router></Router>
    </div>
  );
}

export default App;
