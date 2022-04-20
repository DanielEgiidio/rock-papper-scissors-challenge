import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/game">
        <div data-id="paper" onClick={setChoice} className="icon icon--paper">
          Papel
        </div>
        <div
          data-id="scissors"
          onClick={setChoice}
          className="icon icon--scissors"
        >
          Tesoura
        </div>
        <div data-id="rock" onClick={setChoice} className="icon icon--rock">
          Pedra
        </div>
      </Link>
    </div>
  );
};

export default Play;
