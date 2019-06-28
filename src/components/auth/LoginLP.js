import React from "react";
import gameFront from "../../img/arcade.svg";
import MainPage from "../MainPage";

const LoginLP = () => {
  return (
    <div>
      {/* Body */}
      <div className="body-container">
        <div className="screen">
          <MainPage />
        </div>
        <div
          className="game-front"
          style={{ backgroundImage: `url(${gameFront})` }}
        />
        <div className="black-screen" />
      </div>
    </div>
  );
};

export default LoginLP;
