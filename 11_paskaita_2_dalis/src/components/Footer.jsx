import "./Footer.css";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return <div className="footerContainer">© {thisYear}</div>;
};

export default Footer;
