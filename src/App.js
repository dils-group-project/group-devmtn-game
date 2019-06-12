import React from "react";
import "./App.css";
import menuIcon from "./img/menu.svg";

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <div className="navigation-container">
        <div className="container">
          <div
            className="menu-icon"
            style={{ backgroundImage: `url(${menuIcon})` }}
          />
          <div className="play-btn">play game</div>
        </div>
      </div>
      {/* Body */}
      <div className="body-container">
        <div className="game-front">
          <div className="screen">Screen</div>
        </div>
      </div>
    </div>
  );
}

export default App;
