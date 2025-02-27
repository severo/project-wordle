import React from "react";

function TextInput({ disabled, value, setValue, onSubmit }) {
  const finalPattern = "^[A-Z]{5}$";

  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit(value);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disabled}
        value={disabled ? "" : value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        pattern={finalPattern}
      />
    </form>
  );
}

export default TextInput;
