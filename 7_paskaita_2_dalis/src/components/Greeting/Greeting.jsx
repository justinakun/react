import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Greeting.css";

const Greeting = () => {
  const { theme } = useContext(ThemeContext);

  const getTodayDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayIndex = today.getDay();

    return daysOfWeek[dayIndex];
  };

  return (
    <div
      style={{ background: theme.background, color: theme.foreground }}
      className="greetingDiv"
    >
      <h1>Happy {getTodayDay()}!!!</h1>
    </div>
  );
};

export default Greeting;
