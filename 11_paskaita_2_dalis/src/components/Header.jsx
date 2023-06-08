import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="headerContainer">
      <div className="logoDiv">
        <img
          className="logoImg"
          src="https://coacher.modeltheme.com/wp-content/themes/coacher/images/theme_coacher_logo.png"
          alt="logo"
        />
      </div>
      <div className="allButtonsContainer">
        <button className="headerButton mainBtn" onClick={() => navigate("/")}>
          MAIN
        </button>
        <button
          className="headerButton usersBtn"
          onClick={() => navigate("/users")}
        >
          USERS
        </button>
      </div>
      <div className="signUpContainer">
        <button className="headerButton loginButton">SIGN UP</button>
        <FiLogIn className="loginIcon" />
      </div>
    </div>
  );
};

export default Header;
