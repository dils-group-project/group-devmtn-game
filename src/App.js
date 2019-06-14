import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import LoginLP from "./components/auth/LoginLP";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginLP />
    </div>
  );
}

export default App;
