import React from "react";
import "./App.css";
import menuIcon from "./img/menu.svg";
import gameFront from "./img/arcade.svg";

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
        <div
          className="game-front"
          style={{ backgroundImage: `url(${gameFront})` }}
        >
          <div className="screen">Screen</div>
        </div>
      </div>
    </div>
  );
}

export default App;
