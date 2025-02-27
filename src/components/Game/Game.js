import React from "react";
import Guesses from "../Guesses";
import Input from "../Input";
import GameOverBanner from "../GameOverBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function getNewAnswer() {
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  return answer;
}

function Game() {
  const [answer, setAnswer] = React.useState(getNewAnswer);
  const [guesses, setGuesses] = React.useState([]);
  const lastGuess = guesses.at(-1);
  const hasWon = lastGuess === answer;
  const hasLost = guesses.length === NUM_OF_GUESSES_ALLOWED && !hasWon;
  const hasFinished = hasWon || hasLost;

  function appendGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  function reset() {
    setAnswer(getNewAnswer());
    setGuesses([]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      {hasWon && (
        <GameOverBanner className="happy" onClick={reset}>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>3 guesses</strong>.
          </p>
        </GameOverBanner>
      )}
      {hasLost && (
        <GameOverBanner className="sad" onClick={reset}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </GameOverBanner>
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
