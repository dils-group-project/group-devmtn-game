import React from "react";
import menuIcon from "../img/menu.svg";

const Navigation = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="navigation-container">
        <div className="container">
          <div
            className="menu-icon"
            style={{ backgroundImage: `url(${menuIcon})` }}
          />
          <div className="login-nav-btn-container">
            <a className="play-btn" href="/login">
              play
            </a>
            {/* <div className="play-btn">play game</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
