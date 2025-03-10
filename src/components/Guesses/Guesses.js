import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
  const rowIndexes = range(0, NUM_OF_GUESSES_ALLOWED);

  function getGuess(index) {
    if (index < 0 || index >= guesses.length || !Number.isInteger(index)) {
      return undefined;
    }
    return guesses[index];
  }

  return (
    <div className="guess-results">
      {rowIndexes.map((rowIndex) => (
        <Guess key={rowIndex} guess={getGuess(rowIndex)} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
