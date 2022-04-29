import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, setScore, myChoice }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState(" ");

  const [counter, setCounter] = useState(3);

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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">Sua Escolha</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">Você Ganhou 🙂</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">Você Perdeu 😔</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">Empate 🤔</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">A Casa Escolhe</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

/*
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
*/
