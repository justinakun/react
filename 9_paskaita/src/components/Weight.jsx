import { useState } from "react";

const Weight = () => {
  const [userInput, setUserInput] = useState("");
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const convertUserInput = () => {
    const tons = userInput * 0.001;
    const grams = userInput * 1000;
    const pounds = userInput * 2.20462262185;
    setText(
      `${userInput} is ${tons} tons, ${grams} grams, and ${pounds} pounds.`
    );
  };

  return (
    <div>
      <input
        type="number"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type amount of kilos"
      />
      <button onClick={convertUserInput}>Convert</button>
      <p>{text}</p>
    </div>
  );
};

export default Weight;
