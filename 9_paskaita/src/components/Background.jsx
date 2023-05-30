import { useState } from "react";

const Background = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const getBackgroundColor = (textLength) => {
    if (textLength < 3) {
      return "white";
    } else if (textLength >= 3 && textLength < 6) {
      return "yellow";
    } else if (textLength >= 6 && textLength < 9) {
      return "green";
    } else {
      return "red";
    }
  };

  const backgroundColor = getBackgroundColor(text.length);

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h2>Write something and see the background change!</h2>
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
};

export default Background;
