import { useState } from "react";

const Background = () => {
  const [userInput, setUserInput] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    if (userInput.length < 2) {
      setBackgroundColor("white");
    } else if (userInput.length >= 2 && userInput.length < 5) {
      setBackgroundColor("yellow");
    } else if (userInput.length >= 5 && userInput.length < 8) {
      setBackgroundColor("green");
    } else {
      setBackgroundColor("red");
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h2>Write something and see the background change!</h2>
      <input type="text" value={userInput} onChange={handleInputChange} />
    </div>
  );
};

export default Background;
