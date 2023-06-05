import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Avatar.css";

const Avatar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{ background: theme.background, color: theme.foreground }}
      className="avatar"
    >
      <h1>JK</h1>
    </div>
  );
};

export default Avatar;
