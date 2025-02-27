import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const cells = value ? [...value] : range(0, 5).map(() => undefined);
  return (
    <p className="guess">
      {cells.map((cell) => (
        <span className="cell">{cell}</span>
      ))}
    </p>
  );
}

export default Guess;
