import React from "react";

function TextInput() {
  const [value, setValue] = React.useState("");

  const finalPattern = "^[A-Z]{5}$"
  const regex = /^[A-Z]{0,5}$/

  function onFormSubmit(event) {
    event.preventDefault();
    console.info("Guess submitted: ", value);
    setValue("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={value} onChange={(event)=> {
        const newValue = event.target.value.toLocaleUpperCase('en-US');
        if (regex.test(newValue)) {
          setValue(newValue);
        }
      }} pattern={finalPattern} />
    </form>
  );
}

export default TextInput;
