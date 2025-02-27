import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const cells = guess ? checkGuess(guess, answer) : range(0, 5).map(() => ({}));
  return (
    <p className="guess">
      {cells.map((cell, index) => (
        <span key={index} className={`cell ${cell.status ?? ""}`}>
          {cell.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
