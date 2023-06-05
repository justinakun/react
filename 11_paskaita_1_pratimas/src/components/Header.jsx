import Logo from "./Logo/Logo";
import Menu from "./Menu";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Logo
        imageURL="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png"
        title="Starbucks"
      />
      <Menu />
    </div>
  );
};

export default Header;
