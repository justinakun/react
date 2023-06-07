import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <button className="headerButton mainBtn" onClick={() => navigate("/")}>
        MAIN
      </button>
      <button
        className="headerButton usersBtn"
        onClick={() => navigate("/users")}
      >
        USERS
      </button>
      <button
        className="headerButton userBtn"
        onClick={() => navigate("/users/")}
      >
        USER
      </button>
    </div>
  );
};

export default Header;
