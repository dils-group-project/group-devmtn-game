import React from "react";
import gameFront from "../../img/arcade.svg";
import Login from "./Login";

const LoginLP = () => {
  return (
    <div>
      {/* Body */}
      <div className="body-container">
        <div
          className="game-front"
          style={{ backgroundImage: `url(${gameFront})` }}
        >
          <div className="screen">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLP;
