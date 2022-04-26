import React from "react";

const Header = ({ score }) => {
  return (
    <div className="header">
      <div className="text">
        <span>Pedra</span>
        <span>Papel</span>
        <span>Tesoura</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};

export default Header;
