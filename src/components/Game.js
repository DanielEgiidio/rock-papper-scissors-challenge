import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, setScore, myChoice }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState(" ");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className="game">
      Minha escolha: {myChoice}
      <br />
      Escolha da Casa:{house} <br />
      Result:
      {playerWin === "win" && <h2>Você Venceu!</h2>}
      {playerWin === "lose" && <h2>Você Perdeu!</h2>}
      {playerWin === "draw" && <h2>Empate</h2>}
      <Link to="/" onClick={() => setHouse()}>
        Jogar Novamente
      </Link>
    </div>
  );
};

export default Game;
