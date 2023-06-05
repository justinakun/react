import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Card.css";

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ background: theme.background, color: theme.foreground }}
      className="cardStyle"
    >
      <img
        src="https://th.bing.com/th/id/OIP.fmCVixr-UuttTca6-0CqMgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        alt="Grumpy Cat"
      />
      <p className="cardPara">This is a very grumpy cat.</p>
    </div>
  );
};

export default Card;
