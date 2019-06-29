import React from "react";
import HighScores from "./HighScores";

const MainPage = () => {
  return (
    <div className="">
      <HighScores />
      <a className="play-btn" href="/login">
        play
      </a>
    </div>
  );
};

export default MainPage;
