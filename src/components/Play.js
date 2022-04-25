import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play__">
      <Link to="/game">
        <div data-id="paper" onClick={setChoice} className="icon icon--paper">
          paper
        </div>
        <div
          data-id="scissors"
          onClick={setChoice}
          className="icon icon--scissors"
        >
          scissors
        </div>
        <div data-id="rock" onClick={setChoice} className="icon icon--rock">
          rock
        </div>
      </Link>
    </div>
  );
};

export default Play;
