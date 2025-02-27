import React from "react";
import Keyboard from "../Keyboard";
import TextInput from "../TextInput";

function Input({ onSubmit, disabled, answer, guesses }) {
  const [value, setValue] = React.useState("");

  const regex = /^[A-Z]{0,5}$/;

  function checkAndSetValue(text) {
    const newValue = text.toLocaleUpperCase("en-US");
    if (regex.test(newValue)) {
      setValue(newValue);
      return true;
    }
    return false;
  }
  function submit(guess) {
    console.info("Guess submitted: ", guess);
    onSubmit(guess);
    setValue("");
  }
  function appendLetter(letter) {
    const newValue = `${value}${letter}`;
    if (checkAndSetValue(newValue) && newValue.length === 5) {
      submit(newValue);
    }
  }
  const isFull = value.length === 5;

  return (
    <>
      <TextInput
        disabled={disabled}
        onSubmit={submit}
        value={value}
        setValue={checkAndSetValue}
        regex={regex}
      />
      <Keyboard
        disabled={disabled || isFull}
        submitLetter={appendLetter}
        answer={answer}
        guesses={guesses}
      />
    </>
  );
}

export default Input;
