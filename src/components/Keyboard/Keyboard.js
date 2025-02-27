import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ disabled, submitLetter, answer, guesses }) {
  const lines = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((line) => [...line]);
  const classByLetter = {};
  for (const guess of guesses) {
    for (const { letter, status } of checkGuess(guess, answer)) {
      classByLetter[letter] = status;
    }
  }

  return (
    <form
      className="guess-input-keyboard"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {lines.map((line, lineIndex) => (
        <div className="keyboard-line" key={lineIndex}>
          {line.map((letter) => (
            <button
              key={letter}
              className={`key ${classByLetter[letter] ?? ""}`}
              onClick={() => submitLetter(letter)}
              disabled={disabled}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </form>
  );
}

export default Keyboard;
