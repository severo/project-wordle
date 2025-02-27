import React from "react";
import Guesses from "../Guesses";
import TextInput from "../TextInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function appendGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <TextInput onSubmit={appendGuess} />
    </>
  );
}

export default Game;
