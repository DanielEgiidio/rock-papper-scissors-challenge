import React, { useState, useEffect } from "react";

const Game = ({ score, setScore, myChoice }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState(" ");

  const newHousePick = () => {
    const choices = ["pedra", "papel", "tesoura"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  return (
    <div className="game">
      Minha escolha: {myChoice}
      <br />
      Escolha da Casa:{house}
    </div>
  );
};

export default Game;
