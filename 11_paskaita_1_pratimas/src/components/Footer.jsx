import Menu from "../pages/Menu";
import "./Footer.css";

const Footer = () => {
  const today = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <Menu />
      <p className="footerText">
        <small>© Starbucks {today}. All rights reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
