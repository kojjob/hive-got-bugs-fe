import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import { StyledHexButton } from "./styled/lib";

function App() {
  return (
    <div className="app">
      <Header />

      <StyledHexButton />
      <Router></Router>
    </div>
  );
}

export default App;
