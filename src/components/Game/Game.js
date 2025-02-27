import React from "react";
import Guesses from "../Guesses";
import Input from "../Input";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const lastGuess = guesses.at(-1);
  const hasWon = lastGuess === answer;
  const hasLost = guesses.length === NUM_OF_GUESSES_ALLOWED && !hasWon;
  const hasFinished = hasWon || hasLost;

  function appendGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      {hasWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <Input
        onSubmit={appendGuess}
        disabled={hasFinished}
        answer={answer}
        guesses={guesses}
      />
    </>
  );
}

export default Game;
