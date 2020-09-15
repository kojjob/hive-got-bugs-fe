import React from "react";
import "./App.css";

import Home from "./components/Home";
import GitHubLogin from "./components/GitHubLogin";

function App() {
  return (
    <div className="app">
      <Home />
      <GitHubLogin />
    </div>
  );
}

export default App;
